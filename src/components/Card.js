import React from "react";
import "./Card.scss";

export default function Card(props) {
  const { type, username, badge, online, avatar, about } = props;
  return (
    <div className="card-container">
      <div className="line" />
      <div className="card">
        <div
          className={`${type === "verified" && "card-image-outer"} ${
            badge === "personality" ? "personality" : "influencer"
          }`}
        >
          <div
            className={`card-image ${type === "verified" ? "oval" : "square"}`}
          >
            <img src={avatar} alt="user" />
          </div>
        </div>
        <div className="card-detail">
          {type === "verified" && (
            <div className="detail-verified">
              <div className="card-username-verified">
                {username}
                <img src="/assets/icon/verified-icon.svg" alt="verified" />
              </div>
              <div className="detail-bottom-verified">{about}</div>
            </div>
          )}
          {type === "new-member" && (
            <>
              <div className="detail-upper">
                <div
                  className={`card-badge ${
                    badge === "influencer" ? "influencer" : "personality"
                  }`}
                >
                  {badge}
                </div>
                <div className="card-username">{username}</div>
              </div>
              <div className="detail-bottom">Online {online} ago</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
