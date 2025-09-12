import { Avatar } from "@mui/joy";
import React from "react";

function UserCard({
  containerClassName,
  avatarContainerClassName,
  userInfoContainerClassName,
  children,
}) {
  return (
    <div className={containerClassName}>
      <div className={avatarContainerClassName}>
        <Avatar />
      </div>
      <div className={userInfoContainerClassName}>{children}</div>
    </div>
  );
}

export default UserCard;
