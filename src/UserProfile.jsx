import React from 'react';

const UserProfile = (props) => {
  console.log(props);
  return <div>{props.match.params.githubLogin}</div>;
};

export default UserProfile;
