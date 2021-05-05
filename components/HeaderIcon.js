function HeaderIcon({ title, Icon }) {
  return (
    <div className="group flex flex-col cursor-pointer items-center hover:text-white w-12 sm:w-20">
      <Icon className="w-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderIcon;
