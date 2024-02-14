"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./profile.css";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { CiLock, CiUser } from "react-icons/ci";
import { PiCurrencyDollarThin, PiCardholderThin } from "react-icons/pi";
import { MdArrowBackIosNew } from "react-icons/md";

const ProfilePage = () => {
  const [isActiveProfile, setIsActiveProfile] = useState(false);
  const { user } = useAuth();
  return (
    <Tabs className="h-full relative bg-darkBG">
      {/* toggle menu button */}
      <button
        onClick={() => setIsActiveProfile(!isActiveProfile)}
        className={`fixed top-[70px] md:top-[87px] xl:top-[86px] ${
          isActiveProfile
            ? "left-2 md:left-5 xl:left-[55px] 2xl:left-[270px]"
            : "left-2 md:left-5 xl:left-[216px] 2xl:left-[432px]"
        } btn btn-sm h-11 bg-transparent hover:bg-transparent active:bg-white/10 border-none shadow-none text-white rounded-full z-10 transition-all duration-300 ease-in-out`}
      >
        <MdArrowBackIosNew
          className={`text-xl transition-transform duration-300 ease-in-out ${
            isActiveProfile ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* large device profile menu */}
      <div
        style={{ height: "calc(100vh - 107px)" }}
        className={`hidden xl:block fixed 2xl:left-[238px] ${
          isActiveProfile ? "w-[78px]" : "w-[240px]"
        } bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl px-3 py-12 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center gap-4">
          {user?.photoURL &&
          user?.photoURL !== undefined &&
          user?.photoURL !== null ? (
            <Image
              alt="profile-image"
              width={100}
              height={100}
              src={user?.photoURL}
              className="rounded-full"
            />
          ) : (
            <p className="text-8xl text-primary">
              <FaUserCircle />
            </p>
          )}
          <div className={` ${isActiveProfile ? "hidden" : "block"}`}>
            <p className="font-semibold"> {user?.displayName}</p>
            <p className="text-xs font-medium mt-1">{user?.email}</p>
          </div>
        </div>
        <hr className="h-0 border border-darkThree my-5" />
        <TabList className="tab-list h-full w-full flex flex-col gap-3">
          <Tab className="react-tab custom-btn">
            {" "}
            <CiUser className="text-xl" />
            <span className={isActiveProfile ? "hidden" : "block"}>
              {" "}
              My Profile
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <CiLock className="text-xl" />{" "}
            <span className={isActiveProfile ? "hidden" : "block"}>
              Security
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            {" "}
            <PiCurrencyDollarThin className="text-xl" />
            <span className={isActiveProfile ? "hidden" : "block"}>
              Currencies
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <PiCardholderThin className="text-xl" />
            <span className={isActiveProfile ? "hidden" : "block"}>
              Payments
            </span>
          </Tab>
        </TabList>
      </div>

      {/* small device profile menu */}
      <div
        className={`xl:hidden profile-menu fixed 2xl:left-[238px]  bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl flex ${
          isActiveProfile && "flex-col md:flex-row"
        } items-center gap-5 md:pl-12 px-3 py-3 transition-all duration-300 ease-in-out`}
      >
        <div
          className={`flex ${
            isActiveProfile ? "flex-col" : "flex-row"
          } gap-3 xl:gap-5 items-center`}
        >
          {isActiveProfile ? (
            user?.photoURL !== undefined && user?.photoURL !== null ? (
              <Image
                alt="profile-image"
                width={100}
                height={100}
                src={user?.photoURL}
                className="rounded-full"
              />
            ) : (
              <p className="text-5xl text-primary">
                <FaUserCircle />
              </p>
            )
          ) : user?.photoURL &&
            user?.photoURL !== undefined &&
            user?.photoURL !== null ? (
            <Image
              alt="profile-image"
              width={50}
              height={50}
              src={user?.photoURL}
              className="rounded-full"
            />
          ) : (
            <p className="text-5xl text-primary">
              <FaUserCircle />
            </p>
          )}
          <div className={isActiveProfile ? "block" : "hidden"}>
            <p className="font-semibold"> {user?.displayName}</p>
            <p className="text-xs font-medium mt-1">{user?.email}</p>
          </div>
        </div>
        <TabList
          className={`tab-list h-full w-full flex ${
            isActiveProfile ? "flex-col" : "flex-row"
          } flex-wrap xs:gap-3`}
        >
          <Tab className="react-tab custom-btn">
            {" "}
            <CiUser className="xs:text-xl" />
            <span className={isActiveProfile ? "block" : "hidden"}>
              {" "}
              My Profile
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <CiLock className="xs:text-xl" />{" "}
            <span className={isActiveProfile ? "block" : "hidden"}>
              Security
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            {" "}
            <PiCurrencyDollarThin className="xs:text-xl" />
            <span className={isActiveProfile ? "block" : "hidden"}>
              Currencies
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <PiCardholderThin className="xs:text-xl" />
            <span className={isActiveProfile ? "block" : "hidden"}>
              Payment Option
            </span>
          </Tab>
        </TabList>
      </div>

      <div
        className={` transition-all duration-300 ease-in-out ${
          isActiveProfile ? "xl:pl-[98px]" : "xl:pl-[260px]"
        }`}
      >
        <TabPanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint
          recusandae quos distinctio unde expedita sapiente labore incidunt quas
          eligendi excepturi laboriosam impedit, aliquam, deserunt dolorum
          adipisci cum corporis autem dolore dignissimos quod, soluta ea! Quos
          explicabo. Nobis minus enim odit officiis quo! Asperiores ab
          architecto, debitis esse rem fugit maiores nesciunt consequatur eum
          accusantium pariatur repellat sit inventore quidem molestias, libero,
          assumenda perferendis numquam. Quaerat ad aperiam corporis, harum
          ipsum dolores eius pariatur natus amet commodi est expedita odit
          consequuntur ipsam! Recusandae quaerat dolor porro quo ducimus omnis
          ab quod reprehenderit perspiciatis molestiae, temporibus, expedita
          delectus quidem qui unde voluptates excepturi sint velit vero eveniet
          asperiores? Eaque provident asperiores perferendis corporis nulla,
          incidunt quia ratione nisi voluptatibus autem cupiditate libero illo a
          voluptas vel modi recusandae veritatis error quidem. Consectetur
          quisquam ipsa veritatis, voluptates tenetur aliquam. Facere mollitia,
          exercitationem nisi hic numquam repudiandae voluptatem ipsum similique
          commodi a alias necessitatibus quia itaque expedita quo rem magnam
          sint doloremque provident voluptate natus odio. Voluptate unde saepe
          illo est suscipit facilis, distinctio neque beatae aspernatur
          voluptatum ut dolorum temporibus repudiandae iure consequatur quasi,
          exercitationem nulla quis tempore similique! Quae ipsa placeat odit
          laborum, officiis quo rem accusamus atque expedita pariatur iste
          eligendi, minus aliquid deleniti porro. Repellat voluptatibus suscipit
          a esse illo ullam, quis ut, dolorem omnis atque aut! Similique maxime
          obcaecati, provident saepe, earum aliquid repudiandae voluptatum
          dolorum numquam, doloremque eveniet? Dignissimos sequi possimus error
          culpa eveniet placeat mollitia saepe fuga, libero consequatur vel
          aspernatur recusandae nulla odit sit assumenda consequuntur
          accusantium delectus necessitatibus reiciendis laudantium eum quos
          doloribus repellendus. Impedit voluptatem rem incidunt voluptate
          commodi aperiam dolorem, sapiente repellendus, ut dignissimos
          laudantium blanditiis modi eaque quam pariatur enim corporis. Dolore,
          vel. Odio, consequatur doloremque. Accusantium ipsum perferendis
          deserunt? Quam facilis ratione maxime rem numquam fugiat vero enim ex.
          A quaerat non, rerum obcaecati cum similique dolorum, dolore quidem
          tempore, officia debitis ex maxime harum ratione repellat magnam
          aspoluptatibus laborum sit voluptate soluta animi quia aliquam impedit
          magnam, reprehenderit adipisci blanditiis maiores illum aperiam sequi
          maxime. Natus, magni cumque aut praesentium nostrum, libero id
          corrupti ipsum nulla temporibus nihil, dolor blanditiis explicabo
          deserunt repudiandae maxime quos vitae exercitationem eum animi est
          voluptatibus dignissimos. Quod sequi suscipit quam, assumenda dicta
          facilis quae exercitationem, minima architecto cupiditate repudiandae
          autem aliquam, incidunt praesentium nostrum eligendi laudantium
          consectetur hic veniam eaque corrupti nesciunt necessitatibus atque
          qui. Quos unde sunt ducimus error autem saepe, inventore suscipit enim
          illum vitae ipsa perspiciatis exercitationem iste harum? Quisquam
          nihil sequi dolor voluptas accusantium neque molestias ducimus
          obcaecati, ut minima ex, soluta, laboriosam blanditiis explicabo
          placeat. Odit eum perferendis aperiam ullam similique delectus minima
          assumenda cumque molestiae ipsa recusandae nemo corrupti rem possimus
          temporibus, ea adipisci, natus ut atque? Ad enim reiciendis sed
          doloremque architecto iusto ducimus? At, dolorem cum ratione nulla sed
          error a pariatur vero officiis nostrum natus, explicabo veniam illum?
          Porro deleniti vero facilis in magni reprehenderit assumenda,
          doloremque velit aspernatur debitis aliquam cupiditate et maxime ab
          cum blanditiis corrupti consectetur! Nostrum repellat modi quis
          laboriosam, unde accusamus numquam optio iusto ipsa autem debitis
          reiciendis cumque ex necessitatibus sunt ab dolorem tempore recusandae
          consequuntur odio dolores eligendi! Recusandae commodi saepe facilis
          beatae ipsa quia quo perspiciatis, nisi excepturi sed autem impedit.
          Temporibus beatae ab consequatur fuga nulla officia deleniti fugit
          alias cum facilis, porrchitecto voluptate ratione impedit natus
          commodi eveniet similique saepe repellat excepturi voluptates qui
          maiores nesciunt tempora. Vero incidunt fugit veniam enim a, commodi
          exercitationem hic dolore ipsa veritatis nostrum officia aliquam ea
          non libero eius adipisci neque consectetur voluptas. Nulla corrupti
          voluptatem beatae voluptas harum repellendus repudiandae recusandae
          maxime. Doloremque accusamus dolorum suscipit sint quia maiores. Nobis
          repellendus nostrum eius deleniti explicabo tempore soluta? Tempore
          laboriosam quia perferendis iusto expedita nulla ad, quibusdam ipsa
          aliquid totam ipsam odit atque, mollitia soluta! Rerum laborum modi
          facilis expedita aperiam itaque obcaecati consectetur ea, nesciunt
          aliquid cum repellat maiores repudiandae enim beatae! Sunt voluptas
          hic necessitatibus commodi repudiandae blanditiis delectus suscipit
          enim veniam? Illum qui cum libero sed minus harum minima, esse quam
          pariatur? Itaque harum error quam voluptatum excepturi iste at. Iusto
          esse pariatur necessitatibus dignissimos inventore laborum, provident
          ullam adipisci illo qui non repellendus doloribus odio quaerat
          sapiente quia beatae nam itaque voluptas. Aliquid delectus debitis
          quae maiores officia illo. Suscipit ullam dignissimos dolore doloribus
          quibusdam cum fuga ratione ducimus natus, nostrum velit accusantium ab
          necessitatibus minus praesentium quod doloremque magnam ex libero.is
          iusto expedita nulla ad, quibusdam ipsa aliquid totam ipsam odit
          atque, mollitia soluta! Rerum laborum modi facilis expedita aperiam
          itaque obcaecati consectetur ea, nesciunt aliquid cum repellat maiores
          repudiandae enim beatae! Sunt voluptas hic necessitatibus commodi
          repudiandae blanditiis delectus suscipit enim veniam? Illum qui cum
          libero sed minus harum minima, esse quam pariatur? Itaque harum error
          quam voluptatum excepturi iste at. Iusto esse pariatur necessitatibus
          dignissimos inventore laborum, provident ullam adipisci illo qui non
          repellendus doloribus odio quaerat sapiente quia beatae nam itaque
          voluptas. Aliquid delectus debitis quae maiores officia illo. Suscipit
          ullam dignissimos dolore doloribus quibusdam cum fuga ratione ducimus
          natus, nostrum velit accusantium ab necessitatibus minus praesentium
          quod do Optio.
        </TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
        <TabPanel>4</TabPanel>
      </div>
    </Tabs>
  );
};

export default ProfilePage;
