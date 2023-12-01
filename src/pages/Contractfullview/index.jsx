import React, { useEffect, useState } from "react";
import { Button } from "components";
import Sidebar2 from "components/Sidebar2";
import { useNavigate, useParams } from 'react-router-dom';
import { useContract } from "contexts/ContractContext";
import { Document, Page, pdfjs } from 'react-pdf';
import { Toast } from "primereact/toast";
import { useAuth } from "contexts/AuthContext";
import Loader from "components/Loader/Loader";

const ContractfullviewPage = () => {
  const { id } = useParams()
  const { toast } = useAuth()

  const [contract, setContarct] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const { getContractById, moveToTrash } = useContract()
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
    navigate('/dashboard/contractspage')
  };

  const downloadPdf = async () => {
    const pdfUrl = contract.pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
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
          <Toast ref={toast} />
          <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 md:gap-5 items-center mx-auto w-full">
            <div className="h-[100vh] md:px-5 relative w-[17%] md:w-full">
              <Sidebar2 className="w-[232px] bg-gray-900_03 flex md:hidden inset-[0] justify-center overflow-auto" />
            </div>
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[71px] items-center justify-end p-10 md:px-5 w-[84%] md:w-full">
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
