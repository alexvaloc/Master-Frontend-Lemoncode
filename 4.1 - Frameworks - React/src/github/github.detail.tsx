import React from "react";
import { Link, useParams } from "react-router-dom";
import { getMemberDetail } from "./github.api";
import { MemberDetailEntity } from "./github.model";

export const GithubDetail: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity | undefined>(
    undefined,
  );
  const { id, filter } = useParams();

  React.useEffect(() => {
    getMemberDetail(id)
      .then((json) => setMember(json))
      .catch(() => console.log("Network error loading member"));
  }, [id]);

  return (
    <div className="detail-page">
      <div className="detail-card">
        <div className="detail-header">
          <img
            className="detail-avatar"
            src={member?.avatar_url}
            alt={member?.login ?? "avatar"}
          />
          <div>
            <h3 className="detail-title">
              {member?.name ?? member?.login ?? "User detail"}
            </h3>
            <div className="detail-subtitle">User ID: {id}</div>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-field">
            <div className="detail-field-label">Login</div>
            <div className="detail-field-value">{member?.login ?? "-"}</div>
          </div>
          <div className="detail-field">
            <div className="detail-field-label">Company</div>
            <div className="detail-field-value">{member?.company ?? "-"}</div>
          </div>
          <div className="detail-field">
            <div className="detail-field-label">Bio</div>
            <div className="detail-field-value">{member?.bio ?? "unkwon"}</div>
          </div>
        </div>

        <div className="detail-actions">
          <Link to={`/list/${filter ?? "lemoncode"}`} className="detail-back">
            Navigate back to List
          </Link>
        </div>
      </div>
    </div>
  );
};
