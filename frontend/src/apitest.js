import React from "react";
import axios from "axios";
const Apitest = () => {
  const getData = () => {
    axios
      .get("http://localhost:4000/api/room",{
        query:{
          RoomId:"P101",
          RoomTypeId:1
        }
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postData = () => {
    axios
      .post("http://localhost:4000/api/room/post", {
        item: {
          RoomId: "P102",
          RoomTypeId: 1,
          Status: 1,
          Phone: "0900000000",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addData = () => {
    axios
      .post("http://localhost:4000/api/room/add", {
        item: {
          RoomId: "P406",
          RoomTypeId: 3,
          Status: 1,
          Phone: "0900082400",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataWithCustomer = () => {
    axios
      .get("http://localhost:4000/api/room/getRoomWithDate", {
        params: {
          CheckInDate: "2024-04-20",
          ExpectedCheckOutDate: "2024-04-30",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const OrderRoom = () => {
    axios
      .post("http://localhost:4000/api/room/orderRoom", {
        item: {
          CustomerId:1,
          StayCustomerId:1,
          UserId:1,
          RoomId:"P105",
          CheckInDate:'2024-04-20',
          ExpectedCHeckOutDate:'2024-04-30'
        },
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // query handle

  return (
    <div>
      <button
        style={{ width: 100, height: 100 }}
        onClick={() => {
          addData();
        }}
      >
        Test
      </button>
    </div>
  );
};

export default Apitest;
