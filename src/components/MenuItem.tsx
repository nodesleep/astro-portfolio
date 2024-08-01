interface MenuItemProps {
  itemName: string;
  itemLink: string;
}

export default function MenuItem({ itemName, itemLink }: MenuItemProps) {
  return (
    <a href={itemLink} className="menu-item">
      {itemName}
    </a>
  );
}
