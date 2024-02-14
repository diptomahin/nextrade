"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./profile.css";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {
  const { user } = useAuth();
  return (
    <Tabs className="h-full relative bg-darkBG">
      <div
        style={{ height: "calc(100vh - 107px)" }}
        className="fixed left-[238px] w-[240px] bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl flex flex-col gap-5 px-3 py-8"
      >
        <div className="flex flex-col items-center">
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
          <h3 className="mt-5 mb-1 font-semibold">{user?.displayName}</h3>
          <p className="text-xs font-medium">{user?.email}</p>
        </div>
        <hr className="h-0 border border-darkThree" />
        <TabList className="h-full w-full flex flex-col gap-3 font-medium">
          <Tab className="react-tab custom-btn">My Profile</Tab>
          <Tab className="react-tab custom-btn">Security</Tab>
          <Tab className="react-tab custom-btn">Currency Preferences</Tab>
          <Tab className="react-tab custom-btn">Payment Option</Tab>
        </TabList>
      </div>

      <div className="pl-[260px]">
        <TabPanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint
          recusandae quos distinctio unde expedita sapiente labore incidunt quas
          eligendi excepturi laboriosam impedit, aliquam, deserunt dolorum
          adipisci cum corporis autem dolore dignissimos quod, soluta ea! Quos
          inventore neque voluptates blanditiis, accusamus similique? Fugit,
          doloribus amet aliquid a quam repellendus corrupti quia dicta
          voluptatem neque nihil aspernatur sunt omnis obcaecati aperiam.
          Consequatur quibusdam ex, culpa ut commodi nihil vero doloribus nobis.
          Sunt blanditiis distinctio rem harum maiores sint delectus inventore
          nisi, praesentium assumenda quaerat corporis quisquam aperiam nulla ex
          itaque unde asperiores. Eum nam doloremque voluptatum obcaecati
          quaerat ipsa illum consequatur ullam maiores nostrum cum velit atque
          nemo, id, asperiores voluptatem tempore sunt vel dolore magni placeat.
          Maiores soluta, odit recusandae velit illum labore, rerum itaque
          voluptatem est, ea suscipit eos placeat! Error nulla officia esse nam
          quos! Asperiores natus dolore quibusdam neque dolor incidunt nesciunt
          enim labore, autem placeat, debitis eaque iure voluptates laudantium
          necessitatibus? Voluptatum perferendis amet facere non velit nihil
          numquam repudiandae nulla veniam obcaecati cumque, suscipit, accusamus
          excepturi dolor facilis doloremque eaque necessitatibus vero nam
          fugiat. Aspernatur aperiam tempore minus quae eveniet quod fugit
          sequi, soluta quos illum officiis nam doloremque omnis saepe ipsum.
          Repellat labore sunt beatae voluptates quos sint aspernatur eos
          officiis distinctio, voluptatum, praesentium voluptatem vel inventore
          quas, natus dignissimos error doloribus saepe sit est delectus
          tenetur. Inventore tempore ad, voluptatibus eius possimus, nesciunt
          iusto laborum nobis maxime magnam ab commodi laudantium necessitatibus
          pariatur nostrum rem neque minima odit asperiores! Esse dolores odio
          excepturi, vero earum rem deserunt reprehenderit, sit dolore vitae,
          doloremque cum eveniet aliquam sunt recusandae. Ullam animi a,
          perferendis blanditiis aliquid saepe fuga omnis illum incidunt
          aspernatur sit et obcaecati aliquam. Quis deserunt recusandae
          consequatur repellat dolores aliquam itaque doloremque praesentium
          dignissimos. Doloremque nemo repellat quia magni est omnis dicta autem
          nihil totam molestiae veniam sequi recusandae beatae sunt, esse quam.
          Minus adipisci voluptatem odio iure sint tenetur eius voluptatibus
          reprehenderit aperiam, earum ea consequatur impedit libero magnam
          corrupti quo sed obcaecati velit repellat voluptatum cupiditate, amet
          eligendi ex. Unde reiciendis illum facilis et nesciunt adipisci omnis
          ipsa, modi pariatur obcaecati rerum quo a, blanditiis iure fuga eaque!
          Laudantium debitis explicabo dignissimos fugit, vitae blanditiis et
          consequuntur architecto amet ratione ducimus sequi doloremque
          recusandae non. Cum quasi vitae numquam voluptates voluptatum dolore
          sapiente eius sit nobis, hic laudantium voluptatem est ut sequi, sunt
          nisi. In atque, pariatur iure blanditiis ea ad. Magni quo modi
          sapiente mollitia explicabo. Nobis minus enim odit officiis quo!
          Asperiores ab architecto, debitis esse rem fugit maiores nesciunt
          consequatur eum accusantium pariatur repellat sit inventore quidem
          molestias, libero, assumenda perferendis numquam. Quaerat ad aperiam
          corporis, harum ipsum dolores eius pariatur natus amet commodi est
          expedita odit consequuntur ipsam! Recusandae quaerat dolor porro quo
          ducimus omnis ab quod reprehenderit perspiciatis molestiae,
          temporibus, expedita delectus quidem qui unde voluptates excepturi
          sint velit vero eveniet asperiores? Eaque provident asperiores
          perferendis corporis nulla, incidunt quia ratione nisi voluptatibus
          autem cupiditate libero illo a voluptas vel modi recusandae veritatis
          error quidem. Consectetur quisquam ipsa veritatis, voluptates tenetur
          aliquam. Facere mollitia, exercitationem nisi hic numquam repudiandae
          voluptatem ipsum similique commodi a alias necessitatibus quia itaque
          expedita quo rem magnam sint doloremque provident voluptate natus
          odio. Voluptate unde saepe illo est suscipit facilis, distinctio neque
          beatae aspernatur voluptatum ut dolorum temporibus repudiandae iure
          consequatur quasi, exercitationem nulla quis tempore similique! Quae
          ipsa placeat odit laborum, officiis quo rem accusamus atque expedita
          pariatur iste eligendi, minus aliquid deleniti porro. Repellat
          voluptatibus suscipit a esse illo ullam, quis ut, dolorem omnis atque
          aut! Similique maxime obcaecati, provident saepe, earum aliquid
          repudiandae voluptatum dolorum numquam, doloremque eveniet?
          Dignissimos sequi possimus error culpa eveniet placeat mollitia saepe
          fuga, libero consequatur vel aspernatur recusandae nulla odit sit
          assumenda consequuntur accusantium delectus necessitatibus reiciendis
          laudantium eum quos doloribus repellendus. Impedit voluptatem rem
          incidunt voluptate commodi aperiam dolorem, sapiente repellendus, ut
          dignissimos laudantium blanditiis modi eaque quam pariatur enim
          corporis. Dolore, vel. Odio, consequatur doloremque. Accusantium ipsum
          perferendis deserunt? Quam facilis ratione maxime rem numquam fugiat
          vero enim ex. A quaerat non, rerum obcaecati cum similique dolorum,
          dolore quidem tempore, officia debitis ex maxime harum ratione
          repellat magnam asperiores optio libero sed. Reiciendis nostrum
          possimus voluptas nesciunt eos sunt aut, odio provident cumque
          voluptatum sapiente dolorem praesentium qui nulla architecto
          dignissimos. Veritatis tempore, soluta harum incidunt quasi architecto
          inventore maiores delectus molestiae tenetur eius, quas qui iste
          corrupti repudiandae assumenda quos neque ipsa dicta ratione corporis
          ducimus! Nulla, provident! Tenetur nobis doloremque minima. Itaque
          harum distinctio rem facilis omnis ut reiciendis quibusdam impedit!
          Cupiditate consectetur consequuntur ex sunt enim iusto, assumenda
          natus voluptates, nobis odio animi debitis ab, praesentium illum.
          Dolorum quo sit officia tenetur voluptatibus laudantium possimus
          similique voluptates eos, accusantium blanditiis hic, nostrum quis
          quibusdam. Ducimus tempora eveniet quam aut labore, consequuntur iusto
          maxime perspiciatis aperiam, enim praesentium amet maiores cumque
          eaque distinctio voluptatibus incidunt sint? Numquam est ratione
          expedita nulla blanditiis veniam earum tempora fugit sequi quia
          voluptates accusamus placeat, repellat voluptatibus fuga corrupti quos
          dolorem amet. Excepturi vel error quas esse ratione, eos consequuntur
          alias corrupti. Eos itaque harum alias delectus et eius, deleniti
          neque officia quia! Possimus, illum tempora? Bla dolorem? Aspernatur
          facilis doloremque voluptatibus, adipisci voluptate perferendis
          aliquid! Temporibus praesentium, blanditiis tempore, inventore placeat
          nemo maxime ea asperiores accusamus veniam esse similique? Quia
          dolorem autem, quod saepe rerum, temporibus harum fugit architecto
          magnam sunt voluptatibus facere nostrum placeat recusandae dignissimos
          eligendi optio quos ab. Voluptatibus laborum sit voluptate soluta
          animi quia aliquam impedit magnam, reprehenderit adipisci blanditiis
          maiores illum aperiam sequi maxime. Natus, magni cumque aut
          praesentium nostrum, libero id corrupti ipsum nulla temporibus nihil,
          dolor blanditiis explicabo deserunt repudiandae maxime quos vitae
          exercitationem eum animi est voluptatibus dignissimos. Quod sequi
          suscipit quam, assumenda dicta facilis quae exercitationem, minima
          architecto cupiditate repudiandae autem aliquam, incidunt praesentium
          nostrum eligendi laudantium consectetur hic veniam eaque corrupti
          nesciunt necessitatibus atque qui. Quos unde sunt ducimus error autem
          saepe, inventore suscipit enim illum vitae ipsa perspiciatis
          exercitationem iste harum? Quisquam nihil sequi dolor voluptas
          accusantium neque molestias ducimus obcaecati, ut minima ex, soluta,
          laboriosam blanditiis explicabo placeat. Odit eum perferendis aperiam
          ullam similique delectus minima assumenda cumque molestiae ipsa
          recusandae nemo corrupti rem possimus temporibus, ea adipisci, natus
          ut atque? Ad enim reiciendis sed doloremque architecto iusto ducimus?
          At, dolorem cum ratione nulla sed error a pariatur vero officiis
          nostrum natus, explicabo veniam illum? Porro deleniti vero facilis in
          magni reprehenderit assumenda, doloremque velit aspernatur debitis
          aliquam cupiditate et maxime ab cum blanditiis corrupti consectetur!
          Nostrum repellat modi quis laboriosam, unde accusamus numquam optio
          iusto ipsa autem debitis reiciendis cumque ex necessitatibus sunt ab
          dolorem tempore recusandae consequuntur odio dolores eligendi!
          Recusandae commodi saepe facilis beatae ipsa quia quo perspiciatis,
          nisi excepturi sed autem impedit. Temporibus beatae ab consequatur
          fuga nulla officia deleniti fugit alias cum facilis, porro in
          consectetur, eius cumque culpa iste accusamus laboriosam facere minima
          quaerat. Iure quidem eum minima aliquid recusandae sed dolores nostrum
          illum! Minus facilis ratione, exercitationem, excepturi voluptate qui
          officia quisquam totam incidunt veritatis cupiditate aut enim. Ipsum
          impedit iure minus in est tempore aut architecto eligendi quibusdam
          ex, at dolorum praesentium voluptas libero odio officiis illum
          aliquam! Odit eos possimus fugiat molestiae ipsam iure optio
          blanditiis quae quis magnam suscipit nihil sint quidem rerum pariatur
          saepe corrupti nulla numquam debitis aliquam quasi, temporibus a
          perspiciatis. Sunt illo magni quos minus? Nobis obcaecati cupiditate
          veritatis quam, nam inventore possimus placeat iusto nisi dolore
          quibusdam dolor cum rerum fuga eligendi ad molestias! Totam maxime
          illo nisi vitae, explicabo laboriosam mollitia a ratione, vel earum
          dolorum, ipsum cumque eaque eveniet ipsam voluptates? Blanditiis
          debitis sunt ea culpa harum placeat repudiandae, voluptatibus ducimus,
          ullam quos laborum dolore dolor consequuntur maiores! A earum
          voluptate, totam ipsum, exercitationem repudiandae sequi magnam quos
          atque vitae, distinctio aspernatur facilis provident mollitia?
          Numquam, modi. Debitis, iure fuga! Facere consectetur earum, maxime
          alias eaque nihil unde animi laudantium quibusdam minima architecto
          voluptate ratione impedit natus commodi eveniet similique saepe
          repellat excepturi voluptates qui maiores nesciunt tempora. Vero
          incidunt fugit veniam enim a, commodi exercitationem hic dolore ipsa
          veritatis nostrum officia aliquam ea non libero eius adipisci neque
          consectetur voluptas. Nulla corrupti voluptatem beatae voluptas harum
          repellendus repudiandae recusandae maxime. Doloremque accusamus
          dolorum suscipit sint quia maiores. Nobis repellendus nostrum eius
          deleniti explicabo tempore soluta? Tempore laboriosam quia perferendis
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
          quod doloremque magnam ex libero. Optio.
        </TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
        <TabPanel>4</TabPanel>
      </div>
    </Tabs>
  );
};

export default ProfilePage;
