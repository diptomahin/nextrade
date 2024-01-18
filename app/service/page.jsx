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
     <h1 className="text-3xl font-bold mx-auto text-center">
        <span className="text-[#22356b]">Service</span> We Offer
      </h1>
      <p className="mt-1 text-gray-600 w-96 text-center mx-auto">
        We offer the best services around from installations to
        repairs, maintenance, and more!
      </p>
     </div>

      <div className="grid md:grid-cols-3 lg:gap-6 xl:gap-20 gap-4 text-center mx-auto justify-center grid-cols-1 item-center mt-10">
      <Card className="py-8 px-2 rounded-lg">
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
        </Card>
        <Card className="py-8 px-2 rounded-lg">
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
        </Card>
        <Card className="py-8 px-2 rounded-lg">
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
        </Card>
        <Card className="py-8 px-2 rounded-lg">
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
        </Card>
        <Card className="py-8 px-2 rounded-lg">
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
        </Card>
        <Card className="py-8 px-2 rounded-lg">
            <div className="w-32 h-fit text-center mx-auto bg-[#22356b] rounded-full">
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
        </Card>
      </div>
    </div>
  );
}
