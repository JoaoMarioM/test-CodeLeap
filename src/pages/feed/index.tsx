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
} from "@/styles/pages/feed.styles";

import Input from "@/components/Input";
import TextArea from "@/components/Input/textarea";

import TrashIcon from "@/assets/trash.svg";
import EditIcon from "@/assets/edit.svg";
import { FeedData, FeedRequest } from "../../types/home.types";
import moment from "moment";
import EditFeed from "@/components/Modals/editFeed";

export default function Feed() {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const [userName, setUserName] = useState("");
  const [feeds, setFeeds] = useState<FeedRequest[]>([]);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [feedIndexSelected, setFeedIndexSelected] = useState<number>()

  const onSubmit = (data: FeedData) => {
    const dataStorage = localStorage.getItem("feed-data");

    let newData: FeedRequest[] = [];
    if (dataStorage) {
      newData = JSON.parse(dataStorage);

      newData.unshift({
        ...data,
        created_datetime: new Date(),
        username: userName,
      });

      localStorage.setItem("feed-data", JSON.stringify(newData));
    } else {
      newData = [
        {
          ...data,
          created_datetime: new Date(),
          username: userName,
        },
      ];
    }

    setFeeds(newData);
    localStorage.setItem("feed-data", JSON.stringify(newData));
    reset({
      title: "",
      content: "",
    });
  };

  const getUser = () => {
    const user = localStorage.getItem("name-user");

    if (!user) {
      return router.push("/");
    }

    setUserName(user);
  };

  const handleDelete = () => {
    const newFeeds = feeds;

    newFeeds.splice(feedIndexSelected as number, 1);

    setFeeds(newFeeds);
    localStorage.setItem("feed-data", JSON.stringify(newFeeds));

    setIsOpenDelete(false);
  };

  const openEdit = (i: number) => {
    setFeedIndexSelected(i)
    setIsOpenEdit(true)
  }

  const getFeeds = () => {
    const feed = localStorage.getItem("feed-data");

    if (feed) {
      const newFeed = JSON.parse(feed)
      setFeeds(newFeed);
    }
  };

  const differenceHour = (hour: Date) => {
    const hourCreated = moment(new Date(), "DD/MM/YYYY HH:mm:ss").diff(moment(new Date(hour), "DD/MM/YYYY HH:mm:ss"), "minutes");

    if(hourCreated < 60) {
      return `${hourCreated} minute${hourCreated > 1 ? "s" : ""} ago`
    }

    const hours = Math.floor(hourCreated / 60)

    return `${hours} hour${hours > 1 ? "s" : ""} ago`
  };

  const onCloseModalEdit = () => {
    setIsOpenEdit(false)
  }

  useEffect(() => {
    getUser();
    getFeeds();
  }, []);

  return (
    <Main>
      <Modal
        isOpen={isOpenDelete}
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
            <ModalTitle>Are you sure you want to delete this item?</ModalTitle>

            <ButtonContainer>
              <button type="button" onClick={() => {
                setIsOpenDelete(false)
                setFeedIndexSelected(undefined)
              }}>
                Cancel
              </button>
              <button className="danger" onClick={() => handleDelete()}>Delete</button>
            </ButtonContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>

      <EditFeed 
        isOpen={isOpenEdit}
        onClose={onCloseModalEdit}
        dataFeed={feeds}
        feedIndexSelected={feedIndexSelected as number}
      />

      <Header>
        <h1>CodeLeap Network</h1>
      </Header>

      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>What’s on your mind?</h2>

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
          <button>Create</button>
        </form>
      </Container>

      {feeds?.map((item, i) => (
        <Content key={i}>
          <ContentHeader>
            <span>{item.title}</span>
            {item.username === userName && (
              <div>
                <button type="button" onClick={() => {
                  setIsOpenDelete(true)
                  setFeedIndexSelected(i)
                }}>
                  <Image src={TrashIcon} alt="trash" />
                </button>

                <button type="button" onClick={() => openEdit(i)}>
                  <Image src={EditIcon} alt="trash" />
                </button>
              </div>
            )}
          </ContentHeader>

          <InformationHeader>
            <span>@{item.username}</span>
            <span>{differenceHour(item.created_datetime)}</span>
          </InformationHeader>

          <Information>{item.content}</Information>
        </Content>
      ))}
    </Main>
  );
}
