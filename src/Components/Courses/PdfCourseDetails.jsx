import { useRef } from "react";
import generatePDF from "react-to-pdf";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { usePDF } from "react-to-pdf";
const PdfCourseDetails = ({ openModal, setOpenModal,courseDetails }) => {
  const { toPDF, targetRef } = usePDF({ filename: "course-details.pdf" });
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Course Details convert to PDF.</Modal.Header>
      <Modal.Body>
        <div
          ref={targetRef}
          className="max-w-md mx-auto bg-white shadow-md rounded-md p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Course Details</h2>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-600">Course Name:</p>
              <p className="font-semibold">{courseDetails?.title}</p>
            </div>
            <div>
              <p className="text-gray-600">Price:</p>
              <p className="font-semibold">${courseDetails?.price}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-600">Duration:</p>
              <p className="font-semibold">{courseDetails?.course_details?.duration}</p>
            </div>
            <div>
              <p className="text-gray-600">Start Date:</p>
              <p className="font-semibold">{courseDetails?.created_at}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-600">Instructor:</p>
              <p className="font-semibold">{courseDetails?.author}</p>
            </div>
            <div>
              <p className="text-gray-600">Status:</p>
              <p className="font-semibold">Active</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-semibold">${courseDetails?.price}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-between w-full">
          <Button onClick={() => toPDF()}>Download PDF</Button>

          <Button
            className="bg-red-500"
            color="red"
            onClick={() => setOpenModal(false)}
          >
            Decline
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default PdfCourseDetails;
