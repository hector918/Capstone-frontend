import React from "react";
import './reading-assistance-page-h.css';
import ComprehensionPage from "./reading-comprehension-page-h";
import { FcAbout } from "react-icons/fc";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";

export default function AssistancePage({pop_frame, fileHash}){
  /////////////////////////////////
  function onLandingClick(){
    pop_frame(0);
  }
  function onComprehensionClick(){
    pop_frame(2);
  }
  function onEnlargeClick(){

  }
  function onShrinkClick(){

  }
  /////////////////////////////////
  return <div className="assistance-page">
    <div className="cols-container">
      <div className="reading-panel">
        <div className="text-reading-panel">
        西域之称自从公元前一世纪流行以来，就以雄奇壮阔的地理景观和无数 美丽动人的传说而罩上了神秘瑰丽的色彩。这块地处亚洲中心，广袤而神奇 的大地，既演绎过残阳如血、金戈铁马的战争风云，也谱写过华夏一体、民 族团结的动人篇章。各民族的迁徙往来，很少停歇的征战杀伐，大小王国的 兴盛衰亡，以及张骞、班超、左宗棠等英雄豪杰在这个地区的擘划经营，又 给她罩上了厚重而又苍凉的历史氛围。她不但疆域广阔，资源丰富，人文复 杂，还是自古以来人类东西方文明的交会地。繁荣兴盛了数千年、长达几万 里，从中国一直通到欧洲的丝绸之路，正是东西方文化交流的大动脉。季羡 林先生认为，“世界上四大文化体系唯一汇流的地方就是中国的新疆。这四 大文化体系是:中国文化体系、印度文化体系、伊斯兰文化体系和欧美文化 体系。这四大文化体系是几千年以来世界上各国、各族人民共同创造出来的， 是全人类的文化结晶。产生于过去，影响在未来，人类前途的荣辱盛衰，仍 将决定于四大文化体系的前进与发展。”
    西域远在西汉归入我国版图之时，西部的界域就直至巴尔喀什湖以东以
  南地区，南部直至喀喇昆仑山的南北两麓，后来到唐朝及喀喇汗朝、西辽和
  元朝时，其西部疆域都较汉代广阔，至清朝强盛之时也仍然包括巴尔喀什湖
  以东以南地区在内。现在的新疆，只相当于清朝强盛之时的一半，它是贪婪
  的沙皇俄国强迫衰弱的清政府签订了一系列不平等条约，强行割占我国大片
  领土后形成的。
    这就是新疆的背景，辽阔、美丽而又苍凉、沉重。
    它预示着在这片土地上发生的一切都出乎人们的意料。
    对这片土地的开发和守卫以及让它长治久安，是自西汉以来各朝代的责
  任和梦想，所以才留下了那么多故城烽燧，屯垦遗址。在历次开发中，总有
  很多人以各种方式迁移而来。
    人类大规模的移民活动从来没有停止过，这种迁徙活动与人类存在的历
  史一样悠久古老，也正是频繁的迁移从人种学和文化学意义上促进了世界的
  形成，并推进着历史的进程。
  移民形成了今天美洲大陆的进步、文明和繁荣;美国的西部移民开垦了 其西部的广阔地域，使耕地面积达到了三点四亿顷，从而使美国的小麦生产 增加了三倍，玉米增加了两倍，因而一举成为世界主要的农产品出口国。到 19 世纪末，西部不仅成为重要的农业中心，而且逐渐成为工业中心。从 1850 年至 1900 年的半个世纪里，美国的工业中心向西移动了三百五十公里，从 而促进了美国社会的工业化。所以，纽约大学历史系教授阿德·斯蒂尔的话
  8
  一点也不过分，他说:“对于美国的发展而言，没有什么因素比西部的存在 更为重要了。”
  而中国人口的迁移在上古就有“夏后氏十迁”，“殷商不常厥邑”，“周之 东迁”的记载。而“丝绸之路”的开通，也早就使西域成为人口往来迁徙之 地。伊朗高原数次人口大迁移，以后的阿拉伯伊斯兰东征，则使新疆成了“世 界史的缩影”。中国近代，也有锡伯族从东北西迁伊犁河谷，土尔扈特部自 伏尔加河流域东归巴音布鲁克草原的实例。这些大规模的移民使新疆一步步 变成了一个移民区，带来了各种各样的文化和观念，方言和习惯，它们兼收 并蓄，形成了一种类似美洲大陆的自由而开放、剽悍而旷达、宽容而大度的 气派。
  新疆的屯垦，早在两千多年前的西汉就开始了。西汉统一西域，从一定 意义上说，就是在屯垦过程中实现的。两千年来的历史也一再证明:屯垦兴， 边境宁;屯垦废，边境乱。
    自细君公主的随员在乌孙国眩雷屯田，揭开新疆屯垦史的第一页以来，
  自西汉到清朝，中央政府在新疆的屯田点计有一百零二处，它们遍及天山南
  北。
  西汉在西域屯戍最盛时，官兵累计曾高达两万五千余人。它巩固了西域 统一，使中国西部经济文化得到了很大的发展。《后汉书·西域传》记载:“立 屯田于膏腴之野，列邮置于要害之地。”它使许多地名从那时起，就以其浓 郁的历史感和富有诗意的韵律流传至今，比如轮台、楼兰、伊循、焉耆、龟 兹、高昌、交河等。唐朝在西域的屯田达到极盛。唐太宗借鉴汉代经验，在 西域大兴屯戍，大至城镇守军，小到烽台驿站，有军即有屯，使西域屯军最 多达十万之众。屯田巩固了它的辽阔疆域，同时也使丝绸之路空前繁荣。清 代的屯田规模最大。乾隆平定准噶尔叛乱后，就把屯田作为安边定国的国策， 不但兴办了军屯，还招募迁徙关内农民来西域以推行民屯，同时，还组织发 配新疆的囚犯屯田耕种，实行犯屯;并从南疆迁移五百户维吾尔农民到伊犁 河谷垦荒种地，组织回屯。不足二十年时间，就在西域开垦了近百万亩耕地。
    行走在新疆大地，你可以感觉在近代有一个人一直被这块热土铭记着。
  他就是抬棺西征维护了国家领土完整的清末湘军首领左宗棠。
  早在 18 世纪初，沙皇彼得一世便把征服中亚和我国新疆作为重大国策。 随后，这个欧洲国家以“筑垒移民”的方式，步步进逼，使其扩张野心得以 实现。太平天国革命的爆发，使清政府无暇西顾，给沙俄加紧侵略新疆提供 了时机，侵吞了新疆四十四万平方公里国土。同时，浩罕汗国军官穆罕默 德·阿古柏在英俄两国的支持下，入侵新疆，先后攻占了南疆英吉沙尔、疏 勒、阿克苏、库车等七城，并在 1867 年底宣布成立了以天山为界的“哲德 沙尔汗国”(即七城之国)。英俄两国利用阿古柏作为并吞新疆的工具，为自 己划定了新疆的势力范围。阿古柏在英国支持下，攻占迪化;沙俄随即借口 阿古柏占领迪化，悍然出兵占领了伊犁。至此，新疆陷入了国土沦丧的严重
  9

  危机之中。
  左宗棠受命于危难之时。
  1875 年，清政府任命左宗棠为钦差大臣，督办西北军务。左宗棠当时虽
  然疾病侵身，年近七旬，仍尽瘁驰驱，率领二百二十营大军西出阳关，远征 新疆。从 1876 年 8 月至 1878 年 1 月，左宗棠所率大军所向披靡，用了不到 一年半时间，就光复了除沙俄盘踞的伊犁之外的新疆所有土地。
        </div>
        <div className="reading-function-panel" title="High light text from above and click these buttons">
          <FcAbout className="info-icon"  />
          <FaSearchPlus className="info-icon" onClick={onEnlargeClick} />
          <FaSearchMinus className="info-icon" onClick={onShrinkClick} />
          <button className="btn btn-style">to Text</button>
          <button className="btn btn-style">to Image</button>
        </div>
      </div>
      
      <div className="comprehension-panel">
        <ComprehensionPage fileHash={fileHash} />
      </div>
    </div>
  </div>
}