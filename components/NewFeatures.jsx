import styles from '../styles';

const NewFeatures = ({ title, subtitle, imgUrl }) => (
  <div className="flex flex-col flex-1 min-w-[210px] sm:max-w-[250px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] bg-[#323F5D] rounded-[24px]`}>
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h2 className="mt-[26px] font-bold text-[24px] text-white leading-[30px]">{title}</h2>
    <p className="mt-[30px] flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
