import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = ({menuOpen}:any) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <h1 className={menuOpen ? "text-xl font-bold text-white":"text-xl font-bold text-primary" }>YOIIII</h1>
      </div>
    </>
  );
};

export default Header;
