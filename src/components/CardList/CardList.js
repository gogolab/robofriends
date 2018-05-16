import React from "react";
import Card from "./Card/Card";

const CardList = props => {
    const robotList = props.robots.map(robot => {
        return (
            <Card
                key={robot.id}
                name={robot.name}
                username={robot.username}
                email={robot.email}
            />
        );
    });

    return <div>{robotList}</div>;
};

export default CardList;
