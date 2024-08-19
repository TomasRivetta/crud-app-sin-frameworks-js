import "../render-buttons/render-buttons.css";
import usersStore from "../../store/users-store";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next ->";

  const prevButton = document.createElement("button");
  prevButton.innerText = "<- Prev";

  const currenPageLabel = document.createElement("span");
  currenPageLabel.id = "current-page";
  currenPageLabel.innerText = usersStore.getCurrentPage();

  element.append(prevButton, currenPageLabel, nextButton);
};
