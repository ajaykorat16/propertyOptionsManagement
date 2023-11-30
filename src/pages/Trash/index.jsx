import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Button, Img, Text } from "components";
import { useContract } from "contexts/ContractContext";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import Sidebar2 from "components/Sidebar2";
import Loader from "components/Loader/Loader";

const TrashPage = () => {
  const { getAllTrashContract, restoreContracts, deleteContracts } = useContract()
  const [isLoading, setIsLoading] = useState(true);
  const [trashList, setTrashList] = useState()
  const [seleteDocuments, setSeleteDocuments] = useState([])
  const [selectedItemStyle, setSelectedItemStyle] = useState({
    cursor: "pointer",
    border: "2px solid transparent", // Default border
    backgroundColor: "transparent",   // Default background color
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
    } else {
      const allIds = trashList.map((t) => t._id);
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
        console.log("seleteDocuments", seleteDocuments);
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
      }
      fetchTrashContracts()
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
              <div className="flex md:flex-col flex-row gap-2 items-center justify-end md:ml-[0] ml-[957px] mr-3.5 mt-6 w-[8%] md:w-full">
                <Text
                  className="text-base text-gray-900_03"
                  size="txtMontserratRomanSemiBold16Gray90003"
                >
                  Select
                </Text>
                <div className="border border-gray-500 border-solid h-6 rounded-sm w-6" onClick={handleSelectAll} ></div>
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
                          <div className="flex flex-row items-end justify-evenly w-full">
                            <Img
                              className="h-14 w-14"
                              src="images/img_lafilecontract.svg"
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
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[269px] w-full">
                <div className="bg-red-A400 flex flex-col items-center justify-end p-[9px] rounded-lg" onClick={handleDeleteContracts}>
                  <Text
                    className="text-base text-white-A700"
                    size="txtMontserratRomanSemiBold16WhiteA700"
                  >
                    Delete{" "}
                  </Text>
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
