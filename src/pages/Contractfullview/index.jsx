import React, { useEffect, useState } from "react";
import { Button, Img } from "components";
import Sidebar2 from "components/Sidebar2";
import { useNavigate, useParams } from 'react-router-dom';
import { useContract } from "contexts/ContractContext";
import { Document, Page, pdfjs } from 'react-pdf';
import { Toast } from "primereact/toast";
import { useAuth } from "contexts/AuthContext";
import { Icon } from "@iconify/react";
import Loader from "components/Loader/Loader";

const ContractfullviewPage = () => {
  const { id } = useParams()
  const { toast } = useAuth()
  const { getContractById, moveToTrash } = useContract()

  const [contract, setContarct] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false)

  pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const navigate = useNavigate();

  const fetchContarct = async () => {
    setIsLoading(true);
    const contract = await getContractById(id);
    setContarct(contract.contract)
    setIsLoading(false);
  };

  const moveContractToTrash = async (id) => {
    await moveToTrash(id);
    navigate('/dashboard/contracts')
  };

  const downloadPdf = async () => {
    const pdfUrl = contract.pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = '_blank'
    link.download = `${contract.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    fetchContarct()
  }, []);

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
            <div className="bg-white-A700 flex flex-col font-montserrat mainFinisherWrapper items-center w-[83%] document-container ">
              <Document file={contract.pdf}>
                <Page pageNumber={1} />
              </Document>
              <div className="flex sm:flex-col flex-row font-montserrat md:gap-10 items-center justify-between w-full">
                <div className="bg-light_blue-500 flex flex-col items-center justify-end rounded-lg">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-base text-center"
                    onClick={() => moveContractToTrash(contract._id)}
                  >
                    Move To Trash
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[169px] text-base text-center"
                  onClick={() => downloadPdf()}
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
};

export default ContractfullviewPage;
