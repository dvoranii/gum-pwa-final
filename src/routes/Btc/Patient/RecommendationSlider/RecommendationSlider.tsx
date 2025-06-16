import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';
import * as S from './RecommendationSlider.styles';

import { RecommendationSet } from '../../../../utils/patientRecommendations';

import _1815_StringFloss_ProWeave from "../../../../assets/btc/patient/recommendations/1815-StringFloss-ProWeave.webp";
import _1940_StringFloss_Fine from "../../../../assets/btc/patient/recommendations/1940-StringFloss-Fine.webp";
import _2008_StringFloss_DualDefense from "../../../../assets/btc/patient/recommendations/2008-StringFloss-DualDefense.webp";
import _2010_StringFloss_ComfortSlide from "../../../../assets/btc/patient/recommendations/2010-StringFloss-ComfortSlide.webp";
import _2030_StringFloss_Expanding from "../../../../assets/btc/patient/recommendations/2030-StringFloss-Expanding.webp";
import _3210_Easy_Thread from "../../../../assets/btc/patient/recommendations/3210-EasyThread.webp";

import _891_Flosser_ProClean from "../../../../assets/btc/patient/recommendations/891-Flosser-ProClean.webp";
import _828_Flosser_Twisted from "../../../../assets/btc/patient/recommendations/828-Flosser-Twisted.webp";
import _821_Flosser_DualTech from "../../../../assets/btc/patient/recommendations/821-Flosser-DualTech.webp";
import _831_Flosser_EcoClean from "../../../../assets/btc/patient/recommendations/831-Flosser-EcoClean.webp";
import _885_Flosser_ProClean from "../../../../assets/btc/patient/recommendations/885-Flosser-ProCleanPlus.webp";
import _887_Flosser_ComfortSlide from "../../../../assets/btc/patient/recommendations/887-Flosser-ComfortSlide.webp";
import _888_Flosser_Advanced from "../../../../assets/btc/patient/recommendations/888-Flosser-AdvancedCare.webp";
import _1815_840_FlossAndThreader from "../../../../assets/btc/patient/recommendations/1815+840-ProWeave&EEZThru.webp";

import _670_SoftPicks_ComfortFlex from "../../../../assets/btc/patient/recommendations/670-SoftPicks-ComfortFlex.webp";
import _632_SoftPicks_Original from "../../../../assets/btc/patient/recommendations/632-SoftPicks-Original.webp";
import _650_SoftPicks_Advanced from "../../../../assets/btc/patient/recommendations/650-SoftPicks-Advanced.webp";
import _642_Sulcus from "../../../../assets/btc/patient/recommendations/642-Sulcus.webp";

import _611_Proxabrush_Original from "../../../../assets/btc/patient/recommendations/611-Proxabrush-Original.webp";
import _1312_Proxabrush_Microtight from "../../../../assets/btc/patient/recommendations/1312-Proxabrush-MicroTight.webp";
import _1314_Proxabrush_Ultratight from "../../../../assets/btc/patient/recommendations/1314-Proxabrush-Ultratight.webp";
import _1414_Proxabrush_Tight from "../../../../assets/btc/patient/recommendations/1414-Proxabrush-Tight.webp";
import _1514_Proxabrush_Moderate from "../../../../assets/btc/patient/recommendations/1514-Proxabrush-Moderate.webp";
import _1614_Proxabrush_Wide from "../../../../assets/btc/patient/recommendations/1614-Proxabrush-Wide.webp";
import _1618_Proxabrush_ExtraWide from "../../../../assets/btc/patient/recommendations/1618-Proxabrush-ExtraWide.webp";
import _3012_Proxabrush_AngleCleaner from "../../../../assets/btc/patient/recommendations/1618-Proxabrush-ExtraWide.webp";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: false,
  prevNextButtons: true,
  pageDots: true,
  contain: true,
  cellAlign: 'center'
};


const productImages: Record<string, string> = {
    '1815': _1815_StringFloss_ProWeave,
    '1940': _1940_StringFloss_Fine,
    '2008': _2008_StringFloss_DualDefense,
    '2010': _2010_StringFloss_ComfortSlide,
    '2030': _2030_StringFloss_Expanding,
    '3210': _3210_Easy_Thread,

    '891': _891_Flosser_ProClean,
    '828': _828_Flosser_Twisted,
    '821': _821_Flosser_DualTech,
    '831': _831_Flosser_EcoClean,
    '885': _885_Flosser_ProClean,
    '887': _887_Flosser_ComfortSlide,
    '888': _888_Flosser_Advanced,
    '1815 + 840': _1815_840_FlossAndThreader,

    '670': _670_SoftPicks_ComfortFlex,
    '632': _632_SoftPicks_Original,
    '650': _650_SoftPicks_Advanced,
    '642': _642_Sulcus,

    '611': _611_Proxabrush_Original,
    '1312': _1312_Proxabrush_Microtight,
    '1314': _1314_Proxabrush_Ultratight,
    '1414': _1414_Proxabrush_Tight,
    '1514': _1514_Proxabrush_Moderate,
    '1614': _1614_Proxabrush_Wide,
    '1618': _1618_Proxabrush_ExtraWide,
    '3012': _3012_Proxabrush_AngleCleaner,
}

type RecommendationSlideProps = {
    priorityText: string;
    productName: string;
    productCode: string;
    slideImageSrc: string;
}

const RecommendationSlide = ({ priorityText, productName, productCode, slideImageSrc }: RecommendationSlideProps) => (
    <S.Slide>
        <S.ProductImage 
            src={slideImageSrc}
            alt={`${priorityText} recommendation: ${productName} (Code: ${productCode})`}
        />
    </S.Slide>
);

const getProductImage = (code: string) => {
    if (code.includes('+')) {
        return productImages[code];
    }
    return productImages[code.split(" ")[0]];
};


export const RecommendationSlider = ({ recommendations }: { recommendations: RecommendationSet }) => {

    const priority1Image = getProductImage(recommendations.priority1.code);
    const priority2Image = getProductImage(recommendations.priority2.code);
    const priority3Image = recommendations.priority3.product 
        ? getProductImage(recommendations.priority3.code) 
        : null;

    if (!priority1Image || !priority2Image || (recommendations.priority3.product && !priority3Image)) {
        console.warn("Missing image for one of the recommended products. Check productImages map and recommendation codes.");
        return <p>Missing product images for selected recommendations</p>
    }

    return (
    <S.CarouselWrapper>
    <Flickity
        className={'carousel'}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        static={false}
    >
        <RecommendationSlide
            priorityText="Priority 1"
            productName={recommendations.priority1.product}
            productCode={recommendations.priority1.code}
            slideImageSrc={priority1Image}
        />

        <RecommendationSlide
            priorityText="Priority 2"
            productName={recommendations.priority2.product}
            productCode={recommendations.priority2.code}
            slideImageSrc={priority2Image}
        />

        {priority3Image && (
            <RecommendationSlide
                priorityText="Priority 3"
                productName={recommendations.priority3.product}
                productCode={recommendations.priority3.code}
                slideImageSrc={priority3Image}
            />
        )}
        
    </Flickity>
    </S.CarouselWrapper>
  )
};
