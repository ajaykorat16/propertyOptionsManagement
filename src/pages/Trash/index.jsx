import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Checkbox } from 'primereact/checkbox';
import { useContract } from "contexts/ContractContext";
import { useAuth } from "contexts/AuthContext";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import Sidebar2 from "components/Sidebar2";
import Loader from "components/Loader/Loader";
import { Icon } from "@iconify/react";

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
  const [showSidebar, setShowSidebar] = useState(false)

  const navigate = useNavigate()

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
        toast.current?.show({ severity: 'error', summary: 'Trash', detail: 'Please select documents first.', life: 3000 })
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
        toast.current?.show({ severity: 'error', summary: 'Trash', detail: 'Please select documents first.', life: 3000 })
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
          <Toast ref={toast} id="toast" />
          <ConfirmDialog />
          <div className="topBarForMob">
            <Img
              onClick={() => navigate('/dashboard/finishes')}
              className="cursor-pointer"
              id="logo"
              src="/images/logo_2.png"
              alt="logo"
            />
            <div className="hamburgerMenu" onClick={() => {
              setShowSidebar(prev => !prev);
            }}>
              {showSidebar ? <Icon icon="akar-icons:cross" height={20} width={20} /> : <Icon icon="cil:hamburger-menu" height={20} width={20} />}
            </div>
          </div>
          <div className="bg-white-A700 flex font-orbitron sm:gap-5 md:gap-5 w-full">
            <div className={`md:px-5 w-[17%] md:w-[30%] md:w-full mainSidebar ${showSidebar ? "showSidebar" : ""}`}>
              <Sidebar2 className="!w-[232px] bg-gray-900_03 flex inset-[0] justify-center overflow-auto" />
            </div>
            <div className="bg-white-A700 flex flex-col mainFinisherWrapper font-montserrat items-center justify-start p-10 md:px-5 w-[83%]">
              <div className="flex flex-col justify-start mb-[159px] mt-[18px] w-full">
                <Text
                  className="md:ml-[0] text-center md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtMontserratRomanSemiBold32"
                >
                  Trash
                </Text>
                <Text
                  className="md:m-[0] ml-[376px] mr-[375px] mt-[11px] text-base text-center text-gray-900_01"
                  size="txtMontserratRomanRegular16"
                >
                  File deletes permanently after 7 days{" "}
                </Text>
                <div className="flex md:flex-row flex-row gap-2 items-center justify-end md:m-[0] ml-[997px] mr-[86px] mt-6 w-[8%] md:w-full cursor-pointer">
                  <Text
                    className="text-base text-gray-900_03"
                    size="txtMontserratRomanSemiBold16Gray90003"
                  >
                    Select
                  </Text>
                  <Checkbox className="border border-gray-500 border-solid h-6 rounded-sm w-6" onClick={handleSelectAll} checked={checked}></Checkbox>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <div className="inner-container flex flex-col gap-4 items-center mb-[269px]" orientation="vertical">
                    <div className="items-container">
                      {trashList.length !== 0 ? (
                        trashList.map((t) => (
                          <div key={t._id}
                            className="item singleFinisherItem flex flex-col items-center justify-start"
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
                            <div className="flex flex-row justify-evenly cursor-pointer">
                              <Img
                                className="h-14 w-14"
                                src="/images/img_lafilecontract.svg"
                                alt="lafilecontract"
                              />
                              <div className="contarct-text flex flex-col items-start justify-start">
                                <Text
                                  className="contract-text-id gap-y-4 text-gray-900_03 w-[87px]"
                                  size="txtMontserratRomanRegular16Gray90003"
                                >
                                  {`ID ${t.id}`}
                                </Text>
                                <Text
                                  className="contract-text-date text-gray-900_01 w-[87px]"
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
                <div className="flex sm:flex-col md:gap-5 justify-between w-full">
                  <Button className="bg-red-A400 cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center" onClick={handleDeleteContracts}>
                    Delete
                  </Button>
                  <Button className="cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center" onClick={handleRestoreContracts}>
                    Restore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>

  );
};

export default TrashPage;
