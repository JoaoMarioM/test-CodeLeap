import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import { useRouter } from "next/router";
import Image from "next/image";

import {
  Container,
  Main,
  Header,
  Content,
  ContentHeader,
  InformationHeader,
  Information,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ButtonContainer,
} from "@/pages/feed/styles";

import Input from "@/components/Input";
import TextArea from "@/components/Input/textarea";

import moment from "moment";
import { FeedData, FeedRequest } from "@/pages/feed/types";
import { ModalEditProps } from "./types";

export default function EditFeed({
  isOpen,
  onClose,
  dataFeed,
  feedIndexSelected
}: ModalEditProps) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (data: FeedData) => {
    const newData = dataFeed;
    newData[feedIndexSelected] = {
      ...newData[feedIndexSelected],
      title: data.title,
      content: data.content,
    }

    localStorage.setItem("feed-data", JSON.stringify(newData));
    onClose()
  };

  useEffect(() => {
    Modal.setAppElement('body')
    if(feedIndexSelected >= 0 && dataFeed){
      reset({
        title: dataFeed[feedIndexSelected].title,
        content: dataFeed[feedIndexSelected].content
      })
    }
  }, [feedIndexSelected])

  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          backgroundColor: "transparent",
          border: "none",
        },
        overlay: {
          backgroundColor: "#777777CC",
        },
      }}
    >
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Edit item</ModalTitle>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="title"
              register={register}
              placeholder="Hello world"
              label="Title"
            />

            <TextArea
              name="content"
              register={register}
              placeholder="Content here"
              label="Content"
            />

            <ButtonContainer>
              <button type="button" onClick={() => onClose()}>
                Cancel
              </button>
              <button className="success">Save</button>
            </ButtonContainer>
          </form>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
