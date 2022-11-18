import "../../../assets/styles/style.scss";
import AboutUsAspects from "./AboutUsAspects";
import SectionTitleWithText from './SectionTitleWithText';


const AboutUs = () => {
  return (
    <>
      {/* section title with text */}
      <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

      <AboutUsAspects />
    </>
  )
}
export default AboutUs
