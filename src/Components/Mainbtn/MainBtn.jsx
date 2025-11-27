export default function MainBtn({ txt, className = "" }) {
  return (
    <>
      <button
        className={`text-white px-16 shadow-[6px_6px_0px_#2E2F35] border-2 border-[#2E2F35] rounded-[15px] py-[1.5rem] bg-[#FF6D2C] ${className}`}
      >
        {txt}
      </button>
    </>
  )
}