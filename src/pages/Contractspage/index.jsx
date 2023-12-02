import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Img, Text } from "components";
import { Toast } from "primereact/toast";
import { useContract } from "contexts/ContractContext";
import { useAuth } from "contexts/AuthContext";
import Sidebar2 from "components/Sidebar2";
import Loader from "components/Loader/Loader";
import { Dropdown } from "primereact/dropdown";

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
          <Toast ref={toast} />
          <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 md:gap-5 items-center mx-auto w-full">
            <div className="h-[100vh] md:px-5 relative w-[17%] md:w-full">
              <Sidebar2 className="w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
            </div>
            <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start p-10 md:px-5 w-[84%] md:w-full">
              <Text
                className="mt-[19px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtMontserratRomanSemiBold32"
              >
                Contracts
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[73px] w-full">
                <div className="flex md:flex-1 flex-row gap-4 items-center justify-between md:mt-0 mt-0.5 w-[35%] md:w-full">
                  <Text
                    className="text-base text-gray-900_03"
                    size="txtMontserratRomanSemiBold16Gray90003"
                  >
                    Filter
                  </Text>
                  <Dropdown value={filter} options={filterOptionList} onChange={(e) => setFilter(e.target.value)} 
                    className="rounded-md text-xs bg-fill text-white_A700 border border-gray-500_7f shadow-bs  border-solid text-base text-left w-[81%] sm:w-full"/>
                </div>
                <div className="flex md:flex-1 flex-row gap-2 items-center justify-between mb-0.5 w-[41%]">
                  <Text
                    className="text-base text-gray-900_03 w-[15%]"
                    size="txtMontserratRomanSemiBold16Gray90003"
                  >
                    Sort by
                  </Text>
                   <Dropdown value={sortBy} options={sortOptionList} onChange={(e) => setSortBy(e.target.value)} 
                    className="rounded-md text-xs bg-fill text-white_A700 border border-gray-500_7f shadow-bs  border-solid text-base text-left w-[81%] sm:w-full"/>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[329px] mt-12 w-[98%] md:w-full">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-6 justify-center min-h-[auto] w-full gap-4 md:gap-5">
                  {contarcts.length !== 0 ? (
                    contarcts.map((c) => (
                      <div key={c.id} className="flex flex-1 flex-col items-center justify-start w-full md:w-1/2"
                        style={c.isRead === 1 ? ({ opacity: 0.7 }) : null}
                        onClick={() => navigate(`/dashboard/contractfullview/${c._id}`)}
                      >
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
                              {`ID ${c.id}`}
                            </Text>
                            <Text
                              className="text-base text-gray-900_01"
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
        </>
      )}
    </>
  )
};

export default ContractspagePage;
