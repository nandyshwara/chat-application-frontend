import { useState, useEffect } from "react";

import { getUser } from "../../services/messagingService";
import LeftPanel from "../layouts/LeftPanel";

export default function UsersLists({ chatRoom, onlineUsersId, currentUser }) {
  const [contact, setContact] = useState();

  useEffect(() => {
    const contactId = chatRoom.members?.find(
      (member) => member !== currentUser.uid
    );

    const fetchData = async () => {
      const res = await getUser(contactId);
      setContact(res);
    };

    fetchData();
  }, [chatRoom, currentUser]);

  return <LeftPanel user={contact} onlineUsersId={onlineUsersId} />;
}
