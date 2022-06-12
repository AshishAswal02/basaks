import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { BannerImage } from "../../styles/banner";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Colors } from "../../styles/theme";

const messages = [
  "Modern look with heart of Kashi ❤",
  "Top leading projects are on!",
  "Knowledge of architecture with touch of Banaras",
];

// const imgArray = [
//     '/images/banner/d1.jpg',
//     '/images/banner/d2.jpg',
//     '/images/banner/d3.jpg',
//     '/images/banner/d4.jpg',
// ]
export default function Promotions() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    // const [imgIndex, setImgIndex] = useState(0);
    useEffect(() => {
            setTimeout(() => {
              setShow(false);
            }, 3000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % messages.length);
    //   setImgIndex((i) => (i + 1) % imgArray.length);

      // slide the message in
        setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef} overflow="hidden">
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>
            {messages[messageIndex]}
            {/* <BannerImage src={imgArray[imgIndex]} /> */}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}