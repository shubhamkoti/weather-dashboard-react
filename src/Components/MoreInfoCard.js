import React from "react";
import { TbThermometer, TbDroplet, TbCloud, TbTemperaturePlus, TbTemperatureMinus } from "react-icons/tb";

function MoreInfoCard({ data }) {
  const { formattedData, degreeSymbol, main, clouds, t } = data;

  return (
    <div className="more-info">
      <div className="info-chip">
        <TbThermometer className="chip-icon" />
        <div className="chip-details">
          <p>{t("realFeel")}</p>
          <span>
            {formattedData.feels_like}
            {degreeSymbol}
          </span>
        </div>
      </div>

      <div className="info-chip">
        <TbDroplet className="chip-icon" style={{color: "#3b82f6"}} />
        <div className="chip-details">
          <p>{t("humidity")}</p>
          <span>{main.humidity}%</span>
        </div>
      </div>

      <div className="info-chip">
        <TbCloud className="chip-icon" style={{color: "#94a3b8"}} />
        <div className="chip-details">
          <p>{t("cover")}</p>
          <span>{clouds.all}%</span>
        </div>
      </div>

      <div className="info-chip">
        <TbTemperatureMinus className="chip-icon" style={{color: "#0ea5e9"}} />
        <div className="chip-details">
          <p>{t("min-temp")}</p>
          <span>
            {formattedData.temp_min}
            {degreeSymbol}
          </span>
        </div>
      </div>

      <div className="info-chip">
        <TbTemperaturePlus className="chip-icon" style={{color: "#ef4444"}} />
        <div className="chip-details">
          <p>{t("max-temp")}</p>
          <span>
            {formattedData.temp_max}
            {degreeSymbol}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MoreInfoCard;
