import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Button, Img, Text } from "components";
import Sidebar2 from "components/Sidebar2";
import { useParams } from 'react-router-dom';
import { useContract } from "contexts/ContractContext";
import Loader from "components/Loader/Loader";
import { Document, Page, pdfjs } from 'react-pdf';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';


const ContractfullviewPage = () => {
  const { id } = useParams()
  const [contract, setContarct] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const { getContractById, moveToTrash } = useContract()
  pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const fetchContarct = async () => {
    setIsLoading(true);
    const contract = await getContractById(id);
    setContarct(contract.contract)
    setIsLoading(false);
  };

  const moveContractToTrash = async (id) => {
    confirmDialog({
      message: 'Are you sure want to move this contact to trash?',
      header: 'Move to trash',
      icon: 'pi pi-info-circle',
      position: 'top',
      accept: async () => {
        await moveToTrash(id);
      },
    });
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
          <ConfirmDialog />
          <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-orbitron sm:gap-5 md:gap-5 items-center mx-auto w-full">
            <div className="h-[100vh] md:px-5 relative w-[17%] md:w-full">
              {/* <Text
            className="ml-[29px] mt-[27px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
            size="txtOrbitronRegular36"
          >
            LOGO
          </Text> */}
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
