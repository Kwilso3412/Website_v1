interface Styles {
  componentText: string;
  componentContent: string;
  componentContainer: string;
  primaryBg: string;
  sectionBg: string;
  backgroundImage: string;
  coverTheScreen: string;
  heroName: string;
  heroBlurb: string;
  heroSection: string;
  heroContentStructuring: string;
  heroContentWrapper: string;
  heroContentSpacer: string;
  positionMain: string;
  positionContainer: string;
  positionText1: string;
  positionText2: string;
  rightButton: string;
  chevronButtonStyle: string;
  leftButton: string;
  card: string;
  cardWrapper: string;
  cardImage: string;
  cardContentWrapper: string;
  cardContentTitle: string;
  cardPara: string;
  cardList: string;
  cardListStyling: string;
  cardDate: string;
  cardSubtitle: string;
  experienceList: string;
  experienceListWrapper: string;
  experienceSpan: string;
  cardExternalLinks: string;
  sliderDots: string;
  sliderDotActive: string;
  sliderDot: string;
}

const styles: Styles = {
  //Image
  backgroundImage:
    "bg-hero-image relative bg-no-repeat bg-cover bg-center aspect-[2/1]",
  coverTheScreen: "h-full w-full",
  // Backgrounds
  primaryBg: "bg-[#000000]",
  sectionBg: "bg-[#232323]",

  /*___Component Styling___*/
  //Hero Content
  heroSection: "flex justify-start items-center min-h-screen ",
  heroContentStructuring: `absolute 
    top-[10%] sm:top-[16%] lg:top-[24%] 
    w-full 
    mx-auto 
    pl-8 sm:pl-16 lg:pl-24 xl:pl-32 2xl:pl-40 
    flex flex-col lg:flex-row lg:justify-between 
    items-start lg:items-center 
    gap-8 
    z-10 
    pr-8 lg:pr-24`,
  heroContentWrapper: "flex-1 lg:mb-0 mb-4",
  heroContentSpacer: "mt-6 lg:mt-8",
  heroName: `text-secondary 
    font-bold
    mb-6
    text-4xl md:text-5xl lg:text-6xl text-[40px] 
    xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px]`,
  heroBlurb: `streaky-glow 
    text-secondary 
    font-bold 
    text-[20px] sm:text-[30px] md:text-[32px] 2xl:text-[46px] 
    sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] 
    w-full overflow-visible`,
  //Position (the rotating text)
  positionMain: `relative 
    cursor-default 
    font-medium 
    text-white 
    text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] 
    leading-[32px] 2xl:leading-[40px] 
    w-full flex justify-center 
    items-center`,
  positionContainer:
    "absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col",
  positionText1: "text first absolute left-1 md:left-2 2xl:left-4 flex",
  positionText2: "text second absolute left-1 md:left-2 2xl:left-4 flex",
  //Components
  componentText:
    "text-secondary text-center mb-12 font-bold md:text-[60px] sm:text-[50px] text-[40px] pt-20",
  componentContent: "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 w-full",
  componentContainer: `relative 
    rounded-lg 
    w-full 
    sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[1800px] 
    mx-auto 
    px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16`,
  // Experience data
  experienceList: "space-y-3",
  experienceListWrapper: "flex items-start text-secondary",
  experienceSpan: "block w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full",
  // Card info and container
  card: `
  bg-white/5
  flex flex-col
  md:flex-row 
  gap-4 
  sm:gap-5 md:gap-6 lg:gap-8 p-3 
  sm:p-4 md:p-6 lg:p-8 
  rounded-md 
  w-full`,
  cardWrapper: "relative w-full md:w-3/5",
  cardImage: "w-full h-auto object-cover md:rounded-3xl",
  cardContentWrapper:
    "w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 flex flex-col justify-right",
  cardContentTitle:
    " text-secondary font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
  cardSubtitle: "text-secondary text-xl mb-2",
  cardExternalLinks: "text-secondary text-xl mb-2",
  cardPara:
    "mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl",
  cardDate:
    "mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl",
  cardList: "flex flex-wrap gap-2 mt-4",
  cardListStyling: `
  px-3 
  py-1 
  text-sm 
  rounded-full
  bg-slate-800/50 
  text-[#71cee3] 
  border border-teal-500/20 
  hover:text-[#FFFFFF] hover:bg-slate-700/50 
  hover:border-teal-500/40 
  hover:shadow-[0_0_10px_theme(colors.teal.500/40)] 
  transition-all duration-300`,
  // Misc
  rightButton:
    "absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full",
  leftButton:
    "absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full",
  chevronButtonStyle: "w-6 h-6",
  sliderDots: "slick-dots !bottom-[-30px]",
  sliderDotActive: "slick-dots .slick-active div { @apply bg-white; }",
  sliderDot: `
  top-[-10px]
  w-2 
  h-2 
  rounded-full 
  bg-gray-400 
  hover:bg-gray-300
  transition-colors
  duration-200
  cursor-pointer
  before:content-none
`,
};

export { styles };
