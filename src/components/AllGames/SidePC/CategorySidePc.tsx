
interface categoryProps{
    nameCategory:string;
    categoryId:string;
    // handlerClick:()=>void;
}
const CategorySide = ({nameCategory, categoryId}:categoryProps) => {
  return (
    <>
        <a className="shadow-2xl w-52 h-16 p-2 mr-5 bg-slate-200 hover:bg-slate-300 rounded-xl flex items-center justify-center hover:cursor-pointer" id={categoryId}>{nameCategory}</a>
    </>
  )
}

export default CategorySide