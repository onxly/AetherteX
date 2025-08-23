import { Avatar } from "@mui/joy";
import React from "react";

function UserCard({
  containerClassName,
  avatarContainerClassName,
  userInfoContainerClassName,
}) {
  return (
    <div className={containerClassName}>
      <div className={avatarContainerClassName}>
        <Avatar />
      </div>
      <div className={userInfoContainerClassName}>Name</div>
    </div>
  );
}

export default UserCard;
