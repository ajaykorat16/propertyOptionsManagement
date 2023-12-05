import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Img, Text } from "components";
import { Toast } from "primereact/toast";
import { useContract } from "contexts/ContractContext";
import { useAuth } from "contexts/AuthContext";
import Sidebar2 from "components/Sidebar2";
import Loader from "components/Loader/Loader";
import { Dropdown } from "primereact/dropdown";
import { Icon } from "@iconify/react";

const sortOptionList = [
  { label: "Date", value: "createdAt" },
  { label: "Indentification Number", value: "id" },
];

const filterOptionList = [
  { label: "All", value: "all" },
  { label: "Unread", value: "unread" },
  { label: "Read", value: "read" },
];

const ContractspagePage = () => {
  const { getAllContract } = useContract()
  const { toast } = useAuth()

  const [contarcts, setContarcts] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('createdAt')
  const [showSidebar, setShowSidebar] = useState(false)
  const navigate = useNavigate();

  const fetchContarcts = async () => {
    setIsLoading(true);
    const contarcts = await getAllContract(filter, sortBy);
    setContarcts(contarcts.contracts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchContarcts()
  }, [filter, sortBy]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toast ref={toast} id="toast" />
          <div className="topBarForMob">
            <Img
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
          <div className="bg-white-A700 flex  font-orbitron sm:gap-5 md:gap-5  w-full">
            <div className={`md:px-5 w-[17%] md:w-[30%] md:w-full mainSidebar ${showSidebar ? "showSidebar" : ""}`}>
              <Sidebar2 className="!w-[232px] bg-gray-900_03 flex inset-[0] justify-center overflow-auto" />
            </div>
            <div className="bg-white-A700 flex flex-col mainFinisherWrapper font-montserrat items-center justify-start p-10 md:px-5 w-[83%] ">
              <div className="flex flex-col justify-start mb-[159px] mt-[18px] w-full">
                <Text
                  className="md:ml-[0] text-center md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtMontserratRomanSemiBold32"
                >
                  Contracts
                </Text>
                <div className="flex md:gap-5 items-center justify-between mt-[76px] w-full sm:flex-col">
                  <div className="flex items-center justify-between sm:flex-col items-baseline">
                    <Text
                      className="text-base text-gray-900_03 mr-[16px]"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      Filter
                    </Text>
                    <Dropdown value={filter} options={filterOptionList} onChange={(e) => setFilter(e.target.value)}
                      className="rounded-md text-xs bg-fill text-white_A700 border border-gray-500_7f shadow-bs  border-solid text-base text-left  w-[38.3vh] h-[40px]" />
                  </div>
                  <div className="flex items-center justify-between sm:flex-col items-baseline">
                    <Text
                      className="text-base text-gray-900_03 w-[59px] mr-[8px]"
                      size="txtMontserratRomanSemiBold16Gray90003"
                    >
                      Sort by
                    </Text>
                    <Dropdown value={sortBy} options={sortOptionList} onChange={(e) => setSortBy(e.target.value)}
                      className="rounded-md text-xs bg-fill text-white_A700 border border-gray-500_7f shadow-bs  border-solid text-base text-left  w-[38.3vh] h-[40px]" />
                  </div>
                </div>
                <div className=" flex flex-col items-center justify-start">
                  <div className="inner-container flex flex-col gap-4 items-center " orientation="vertical">
                    <div className="items-container">
                      {contarcts.length !== 0 ? (
                        contarcts.map((c) => (
                          <div key={c.id}
                            className="item singleFinisherItem flex flex-col items-center justify-start"
                            style={c.isRead === 1 ? ({ opacity: 0.7 }) : null}
                            onClick={() => navigate(`/dashboard/contractfullview/${c._id}`)}
                          >
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
                                  {`ID ${c.id}`}
                                </Text>
                                <Text
                                  className="contract-text-date text-gray-900_01 w-[87px]"
                                  size="txtMontserratRomanRegular16"
                                >
                                  {c.createdAt}
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
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
};

export default ContractspagePage;
