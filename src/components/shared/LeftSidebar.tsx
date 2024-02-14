import { useUserContext } from "@/context/AuthContext";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const { user } = useUserContext();
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={325}
          />
        </Link>
        <Link to={`/profile/${user.id}`}></Link>
      </div>
    </nav>
  );
};

export default LeftSidebar;
