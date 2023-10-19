import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] bg-[#323F5D] rounded-[24px]`}>
      <p className="text-[20px] font-bold text-white">0{number}</p>
    </div>
    <p className="mr-[30px] flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
