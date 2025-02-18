import Image from "next/image";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
export default function Hero() {
  const [open, setOpen] = useState(false);
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const controlOpen = async () => {
    await timeout(7000);
    setOpen(true);
  };
  useEffect(() => {
    controlOpen();
  }, []);
  return (
    <div>
      <div className="relative w-full h-screen">
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/assets/bs.mp4" type="video/mp4" />
        </video>
        <div className="h-full px-4  lg:px-0">
          <div className="relative  z-10 flex items-center justify-center h-full w-full text-white">
            <h1 data-aos="zoom-in" className="text-3xl sm:text-5xl md:text-7xl font-bold">
              WE BOLSTER YOU!
            </h1>
          </div>
        </div>
      </div>
      <Modal
        id="modal"
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="mx-auto outline-none">
          <Card sx={{ maxWidth: 400 }} className="relative">
            <CancelSharpIcon
              onClick={() => setOpen(false)}
              className="absolute text-red-500  right-2 top-2 cursor-pointer"
            />
            <CardMedia
              sx={{ height: 300 }}
              image="/assets/images/poster.jpeg"
              title="Bolster Summer Camp 2025"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bolster Summer Camp 2025
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Bolster Campus presents a unique summer camp designed
                exclusively for 10th-grade students.
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://docs.google.com/forms/d/1PCPoDfVZ9JajTLfZ5zB-0IVfNI30WF1HoRuJvgxTGTE/viewform?edit_requested=true">
                <Button
                  size="large"
                  className="bg-emerald-700 text-white  font-bold hover:bg-emerald-800"
                >
                  Enroll now
                </Button>{" "}
              </a>
            </CardActions>
          </Card>
        </div>
      </Modal>
    </div>
  );
}
