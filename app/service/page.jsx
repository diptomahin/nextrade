"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import tradIcon from "@/assets/trading.jpeg";
import Image from "next/image";

export default function page() {
  return (
    <div className="text-center mt-10 mx-auto">

     <div>
     <h1 className="text-3xl font-bold">
        {" "}
        <span className="text-[#22356b]">Service</span> We Offer
      </h1>

      <p className="mt-1 text-gray-600 ">
        We offer the best services around - from installations to <br />{" "}
        repairs, maintenance, and more!
      </p>
     </div>

      <div className="grid md:grid-cols-3 gap-4 text-center mx-auto justify-center grid-cols-1 item-center">

          
      <div className="mt-10">
        <Card className="py-8 px-2 rounded-lg" sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full ">
              <Image
                src={tradIcon}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="font-semibold">
                Strategy Consulting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A social assistant that's flexible can accommodate your schedule
                and needs...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="mt-10">
        <Card className="py-8 px-2 rounded-lg" sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full ">
              <Image
                src={tradIcon}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="font-semibold">
                Strategy Consulting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A social assistant that's flexible can accommodate your schedule
                and needs...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="mt-10">
        <Card className="py-8 px-2 rounded-lg" sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full ">
              <Image
                src={tradIcon}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="font-semibold">
                Strategy Consulting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A social assistant that's flexible can accommodate your schedule
                and needs...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="mt-10">
        <Card className="py-8 px-2 rounded-lg" sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full ">
              <Image
                src={tradIcon}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="font-semibold">
                Strategy Consulting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A social assistant that's flexible can accommodate your schedule
                and needs...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="mt-10">
        <Card className="py-8 px-2 rounded-lg" sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full ">
              <Image
                src={tradIcon}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="font-semibold">
                Strategy Consulting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A social assistant that's flexible can accommodate your schedule
                and needs...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="mt-10">
        <Card className="py-8 px-2 rounded-lg" sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full ">
              <Image
                src={tradIcon}
                alt="Trad Icon"
                width={400}
                height={500}
                placeholder="blur"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="font-semibold">
                Strategy Consulting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A social assistant that's flexible can accommodate your schedule
                and needs...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      </div>

     
    </div>
  );
}
