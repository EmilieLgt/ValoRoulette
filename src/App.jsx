import { useEffect, useState } from "react";
import "./App.css";
import AvatarAgents from "./components/AvatarAgents";
import CardsPlayer from "./components/CardsPlayer";
import BouttonChoix from "./components/BouttonChoix";

function App() {
  const agentsList = [
    {
      id: 0,
      name: "Astra",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png",
      avatar:
        "https://www.esports.net/wp-content/uploads/2022/08/Valorant-Astra.png",
      gif: "https://i.pinimg.com/originals/22/6a/ce/226ace5418735107b3711dacb27e1014.gif",
    },
    {
      id: 1,
      name: "Breach",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt100d13bfa8286a3d/5eb7cdc11ea0c32e33b95fa2/V_AGENTS_587x900_Breach.png",
      avatar:
        "https://server.blix.gg/imgproxy/RA8nvfnHAmKAM4XETPnuPVAn1TDGMhPlghrxgJ-d9zs/rs:fit:260:260:0/g:no/aHR0cDovL21pbmlvOjkwMDAvaW1hZ2VzLzAzYWViNTllODRjNDQ4N2U4ZmMyYWQ5NTQ3M2FjZTVmLnBuZw.webp",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9c9t5xlr5LPO_Tvgy4TGmkSrtJtIJZ6rVkiz7hHXkWB2tN4s2ExBwmY0lSz4Zlf1lSQ&usqp=CAU",
    },
    {
      id: 2,
      name: "Brimstone",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png",
      avatar:
        "https://static.valorantstats.xyz/agent-headshots/brimstone-headshot.png",
      gif: "https://y.yarn.co/8511fd28-de8b-4964-806a-9d3942777b6a_text.gif",
    },
    {
      id: 3,
      name: "Chamber",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6f1392b30784e029/618d9da0d380f814d61f001c/WebUpdate_Chamber_KeyArt.png",
      avatar:
        "https://static.valorantstats.xyz/agent-headshots/chamber-headshot.png",
      gif: "https://menace-theoriste.fr/wp-content/uploads/2017/04/angry-dwight.gif",
    },
    {
      id: 4,
      name: "Clove",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8e3123f0fc29db2a/65fddcd7fc58c8422b142571/E8A2_Web_Clove_key_Art.png",
      avatar: "https://pbs.twimg.com/media/GJd3uLZXoAAovBW.png",
      gif: "https://y.yarn.co/3d316ee7-5c73-47fd-b260-657a593ddfed_text.gif",
    },
    {
      id: 5,
      name: "Cypher",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png",
      avatar:
        "https://static.valorantstats.xyz/agent-headshots/cypher-headshot.png",
      gif: "https://i.gifer.com/origin/82/824bc858cca593e0679076bf283630c6_w200.gif",
    },
    {
      id: 6,
      name: "Deadlock",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt59125f966df76a27/649492a5a02402d20ee6900e/Deadlock-KeyArt.png",
      avatar:
        "https://static.valorantstats.xyz/agent-headshots/deadlock-headshot.png",
      gif: "https://data.textstudio.com/output/sample/animated/3/6/5/7/i-m-bored-2-17563.gif",
    },
    {
      id: 7,
      name: "Fade",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt516d37c6c84fcda0/625db737c9aa404b76ddd594/Fade_Key_Art_587x900_for_Website.png",
      avatar:
        "https://cdn.gameleap.com/images/articles/art_VezJSvgZdb/art-img_MFM5vhe9W/1x.webp",
      gif: "https://i.gifer.com/ACur.gif",
    },
    {
      id: 8,
      name: "Gekko",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc942933be01094ae/6402724fe9f75310481c3851/V_AGENTS_587x900_Gekko2.png",
      avatar:
        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png",
      gif: "https://i.makeagif.com/media/11-15-2023/lef35_.gif",
    },
    {
      id: 9,
      name: "Harbor",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt81e8a3e8c7beeaf3/634894a15e281916980f655b/Harbor_KeyArt-web.png",
      avatar:
        "https://static.valorantstats.xyz/agent-headshots/harbor-headshot.png",
      gif: "https://www.surfertoday.com/images/stories/surfingmeme2.jpg",
    },
    {
      id: 10,
      name: "Iso",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt34e30d5669e7309c/653add3080274d040a37d656/ISO_KeyArt_Final.png",
      avatar: "https://pbs.twimg.com/media/F9eyE2mWwAA-weq.png",
      gif: "https://risibank.fr/cache/medias/0/24/2421/242135/full.gif",
    },
    {
      id: 11,
      name: "Jett",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png",
      avatar:
        "https://static.valorantstats.xyz/agent-headshots/jett-headshot.png",
      gif: "https://i.makeagif.com/media/8-08-2014/IYMUGB.gif",
    },
    {
      id: 12,
      name: "KAY/O",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png",
      avatar:
        "https://static.valorantstats.xyz/agent-headshots/kayo-headshot.png",
      gif: "https://i.ytimg.com/vi/PFM6TjJ-UCY/maxresdefault.jpg",
    },
    {
      id: 13,
      name: "Killjoy",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png",
      avatar:
        "https://server.blix.gg/imgproxy/qMrBHZax8Yg9k_6Db3-Ddi3L2IXC9hCM0IdTOSwVHFo/rs:fit:260:260:0/g:no/aHR0cDovL21pbmlvOjkwMDAvaW1hZ2VzLzY5MTlhZjk5ZTNmNTRjNWQ5OTNhMGRlMDU4NDY0YmZjLnBuZw.webp",
      gif: "https://ih0.redbubble.net/image.1098622247.1231/raf,360x360,075,t,fafafa:ca443f4786.jpg",
    },
    {
      id: 14,
      name: "Neon",
      image:
        "https://www.mandatory.gg/wp-content/uploads/mandatory-valorant-neon-art.png",
      avatar:
        "https://static.valorantstats.xyz/agent-headshots/neon-headshot.png",
      gif: "https://media.tenor.com/DacxJ7g3oKYAAAAC/screaming-internally.gif",
    },
    {
      id: 15,
      name: "Omen",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png",
      avatar: "https://lineupsvalorant.com/static/agents/Omen.webp",
      gif: "https://media.tenor.com/2rJfZdIeSHUAAAAM/i-am-confused.gif",
    },
    {
      id: 16,
      name: "Phoenix",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png",
      avatar:
        "https://server.blix.gg/imgproxy/p4cxRUwKiFD9AUudz2wiXGZ25UQaAO7XU--tys892j8/rs:fit:260:260:0/g:no/aHR0cDovL21pbmlvOjkwMDAvaW1hZ2VzLzdhMDlmOTVlOTRiMDRmNmRiMGE4YWJjNTQzMWNiMzNhLnBuZw.webp",
      gif: "https://media.tenor.com/skpDDWZ59vQAAAAM/road-to-plat-valorant-phoenix-flash-valorant.gif",
    },
    {
      id: 17,
      name: "Raze",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png",
      avatar: "https://lineups.fun/static/media/icon.01d6aff60359bd300d06.png",
      gif: "https://media0.giphy.com/media/fjyGFXQyf3AJWB6dqc/giphy.gif?cid=6c09b952s25so3343pqdd6p0yxkp3blqj6peo2prl2u2ibou&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    },
    {
      id: 18,
      name: "Reyna",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png",
      avatar:
        "https://server.blix.gg/imgproxy/AS1NkTDy-d6NUEFNmWPJ9m0q0koI_S96-j-nLX6yiTo/rs:fit:260:260:0/g:no/aHR0cDovL21pbmlvOjkwMDAvaW1hZ2VzLzIwZDQwNDM5ZDY3NTQwOTU5YTE2OTRjZTIxZGU1MmQ1LnBuZw.webp",
      gif: "https://media0.giphy.com/media/HJLrMf7wslzIUuDvjC/200w.gif?cid=6c09b95239l421acbba2tio1yopb0qfhzx8gnv18lq66swty&ep=v1_gifs_search&rid=200w.gif&ct=g",
    },
    {
      id: 19,
      name: "Sage",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png",
      avatar:
        "https://tiermaker.com/images/template_images/2022/15884532/valorant-agents-w-deadlock-june-2023-15884532/sage-headshot.png",
      gif: "https://pbs.twimg.com/media/EvWD8LlWYAYKHif.jpg",
    },
    {
      id: 20,
      name: "Skye",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png",
      avatar:
        "https://static.valorantstats.xyz/agent-headshots/skye-headshot.png",
      gif: "https://media.tenor.com/3m-UNCbquwsAAAAM/valorant-valorant-skye.gif",
    },
    {
      id: 21,
      name: "Sova",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png",
      avatar: "https://schoch.co.nz/img/Sova_icon.png",
      gif: "https://i.kym-cdn.com/entries/icons/facebook/000/034/772/Untitled-1.jpg",
    },
    {
      id: 22,
      name: "Viper",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png",
      avatar:
        "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
      gif: "https://i.pinimg.com/originals/bf/25/c1/bf25c153dfeab1d8e8217e9778f32eaa.gif",
    },
    {
      id: 23,
      name: "Yoru",
      image:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png",
      avatar:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png",
      gif: "https://pbs.twimg.com/media/Fx3vqg_XsAAOhdE.jpg",
    },
  ];

  const [indexAgent, setIndexAgent] = useState(null);
  const [listecomplete, setListeComplete] = useState(agentsList);
  const [selectedAvatars, setSelectedAvatars] = useState([]);
  const [showSelectedCard, setShowSelectedCard] = useState(false);
  const [selectedAvatarsBackup, setSelectedAvatarsBackup] = useState([]);

  const randomAgent = () => {
    return Math.floor(Math.random() * listecomplete.length);
  };

  const choixAgent = () => {
    const newIndexAgent = randomAgent();
    setIndexAgent(newIndexAgent);
    setShowSelectedCard(true);
  };

  const removeAgent = (agentId) => {
    const agentToRemove = listecomplete.find((agent) => agent.id === agentId);
    if (agentToRemove) {
      setSelectedAvatars([...selectedAvatars, agentToRemove]);
      const newList = listecomplete.filter((agent) => agent.id !== agentId);
      setListeComplete(newList);
      setShowSelectedCard(false);
    }
  };

  const handleCardClick = () => {
    setShowSelectedCard(false);
  };

  const resetPage = () => {
    setIndexAgent(null);
    setListeComplete(agentsList); // Réinitialise la liste complète avec la liste d'origine
    setSelectedAvatars([]);
    setShowSelectedCard(false);
  };

  return (
    <>
      <h1>Valoroulette</h1>

      <section className="bouttonsContainer">
        <BouttonChoix agentsList={listecomplete} choixAgent={choixAgent} />
        <button className="bouttonReset" onClick={resetPage}>Reset ❌</button>
      </section>

      <section className="affichage">
        <section>
          <h2>Agents</h2>
          <div className="barreAvatars">
            <AvatarAgents
              agentsList={listecomplete}
              removeAgent={removeAgent}
            />
          </div>
        </section>
        
        {showSelectedCard && indexAgent !== null ? (
          <CardsPlayer
            agentsList={listecomplete}
            indexAgent={indexAgent}
            onClick={handleCardClick}
          />

        ) : null}
        <div className="bansContainer">
          <h2>Bans</h2>
          <div className="bans">
            <AvatarAgents agentsList={selectedAvatars} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;