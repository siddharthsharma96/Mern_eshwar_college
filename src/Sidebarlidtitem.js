const SidebarListItem = ({ text, iconName, classe, updateActiveItem, id }) => {
  const handler = (e, index = 0) => {
    updateActiveItem(index);
  };
  return (
    <li
      onClick={(ev) => {
        handler(ev, id);
      }}
    >
      <a class={classe} href="javascript:void(0)">
        <span class="material-icons">{iconName}</span>
        <span>{text}</span>
      </a>
    </li>
  );
};
export default SidebarListItem;
