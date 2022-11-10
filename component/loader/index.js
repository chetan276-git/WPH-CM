import React from "react";
import { TailSpin, ThreeDots } from "react-loader-spinner";

function Index(props) {
  return (
    <>
      {props.loading ? (
        <div
          className="loader"
          style={{
            position: "fixed",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "9999",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={props.loading}
          />
        </div>
      ) : null}
      {props.children}
    </>
  );
}

export default Index;
