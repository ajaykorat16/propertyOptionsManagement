import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Checkbox } from 'primereact/checkbox';
import { useContract } from "contexts/ContractContext";
import { useAuth } from "contexts/AuthContext";
import { Toast } from "primereact/toast";
import Sidebar2 from "components/Sidebar2";
import Loader from "components/Loader/Loader";

const TrashPage = () => {
  const { getAllTrashContract, restoreContracts, deleteContracts } = useContract()
  const { toast } = useAuth()

  const [isLoading, setIsLoading] = useState(true);
  const [trashList, setTrashList] = useState()
  const [checked, setChecked] = useState(false)
  const [seleteDocuments, setSeleteDocuments] = useState([])
  const [selectedItemStyle, setSelectedItemStyle] = useState({
    cursor: "pointer",
    border: "2px solid transparent",
    backgroundColor: "transparent",
  });

  const handleItemClick = (id) => {
    const isSelected = seleteDocuments.includes(id);

    if (isSelected) {
      setSeleteDocuments((prevSelected) =>
        prevSelected.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSeleteDocuments((prevSelected) => [...prevSelected, id]);
    }
  };

  const handleSelectAll = () => {
    if (seleteDocuments.length === trashList.length) {
      setSeleteDocuments([]);
      setChecked(false)
    } else {
      const allIds = trashList.map((t) => t._id);
      setChecked(true)
      setSeleteDocuments(allIds);
    }
  };

  const fetchTrashContracts = async () => {
    setIsLoading(true);
    const contractData = await getAllTrashContract();
    setTrashList(contractData.contracts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTrashContracts()
  }, []);

  const handleDeleteContracts = async (e) => {
    e.preventDefault()

    try {
      if (seleteDocuments.length !== 0) {
        confirmDialog({
          message: 'Are you sure you want to delete these contracts?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          position: 'top',
          accept: async () => {
            await deleteContracts(seleteDocuments);
            fetchTrashContracts();
          },
        });
      } else {
        toast.current.show({ severity: 'error', summary: 'Trash', detail: 'Please select documents first.', life: 3000 })
      }
    } catch (error) {
      console.log("Error [Delete Trash]", error.message);
    }
  };

  const handleRestoreContracts = async (e) => {
    e.preventDefault()
    try {
      if (seleteDocuments.length !== 0) {
        await restoreContracts(seleteDocuments)
        fetchTrashContracts()
      } else {
        toast.current.show({ severity: 'error', summary: 'Trash', detail: 'Please select documents first.', life: 3000 })
      }
    } catch (error) {
      console.log("Error [Restore Trash]", error.message)
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toast ref={toast} />
          <ConfirmDialog />
          <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 md:gap-5 items-center mx-auto w-full">
            <div className="h-[100vh] md:px-5 relative w-[17%] md:w-full">
              <Sidebar2 className="w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
            </div>
            <div className="bg-white-A700 flex flex-col font-montserrat justify-end p-10 md:px-5 w-[84%] md:w-full">
              <Text
                className="md:ml-[0] mt-[19px] mx-[482px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900 text-center"
                size="txtMontserratRomanSemiBold32"
              >
                Trash
              </Text>
              <Text
                className="md:ml-[0] ml-[381px] mr-[378px] mt-[11px] text-base text-center text-gray-900_01"
                size="txtMontserratRomanRegular16"
              >
                File deletes permanently after 7 days{" "}
              </Text>
              <div className="flex md:flex-col flex-row gap-2 items-center justify-end md:ml-[0] ml-[957px] mr-3.5 mt-6 w-[8%] md:w-full cursor-pointer">
                <Text
                  className="text-base text-gray-900_03"
                  size="txtMontserratRomanSemiBold16Gray90003"
                >
                  Select
                </Text>
                <Checkbox className="border border-gray-500 border-solid h-6 rounded-sm w-6" onClick={handleSelectAll} checked={checked}></Checkbox>
              </div>
              <div className="flex flex-col items-center justify-start mt-6 mx-auto w-[98%] md:w-full">
                <div className="flex flex-col items-center justify-start mb-[329px] mt-12 w-[98%] md:w-full">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-6 justify-center min-h-[auto] w-full gap-4 md:gap-5">
                    {trashList.length !== 0 ? (
                      trashList.map((t) => (
                        <div key={t._id}
                          className="flex flex-1 flex-col items-center justify-start w-full md:w-1/2"
                          onClick={() => handleItemClick(t._id)}
                          style={{
                            ...selectedItemStyle,
                            border: seleteDocuments.includes(t._id)
                              ? "2px solid #4285F4"
                              : "2px solid transparent",
                            backgroundColor: seleteDocuments.includes(t._id)
                              ? "#E0E0E0"
                              : "transparent",
                          }}>
                          <div className="flex flex-row items-end justify-evenly w-full cursor-pointer">
                            <Img
                              className="h-14 w-14"
                              src="/images/img_lafilecontract.svg"
                              alt="lafilecontract"
                            />
                            <div className="flex flex-col gap-1.5 items-start justify-start mt-[7px]">
                              <Text
                                className="text-base text-center text-gray-900_03"
                                size="txtMontserratRomanRegular16Gray90003"
                              >
                                {`ID ${t.id}`}
                              </Text>
                              <Text
                                className="text-base text-gray-900_01"
                                size="txtMontserratRomanRegular16"
                              >
                                {t.createdAt}
                              </Text>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      "Contacts Not Found"
                    )}
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[60px] w-full  ">
                <div className="flex flex-col items-center justify-end p-[9px] rounded-lg">
                  <Button className="bg-red-A400 cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center" onClick={handleDeleteContracts}>
                    Delete
                  </Button>
                </div>
                <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center" onClick={handleRestoreContracts}>
                  Restore
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>

  );
};

export default TrashPage;
