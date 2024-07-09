import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsInComplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondryButton = [
    { text: "Mark as complete", onClick: markAllAsComplete },
    { text: "Mark as incomplete", onClick: markAllAsInComplete },
    { text: "Reset to initial", onClick: resetToInitial },
    { text: "Remove all items", onClick: removeAllItems },
  ];

  return (
    <section className="button-group">
      {secondryButton.map(({ text, onClick }) => (
        <Button key={text} onClick={onClick} buttonType="secondary">
          {text}
        </Button>
      ))}
    </section>
  );
}
