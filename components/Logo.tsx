import Image from "next/image";

function Logo(props: any) {
 const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
        <Image 
         className="rounded-full object-cover"
         height={50}
         width={50}
         src="https://avatars.githubusercontent.com/u/105073106?s=400&u=647fe0ac5ff2a70300fa970c904f4ceeb79f672c&v=4"
         alt="logo"
        />
         <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;