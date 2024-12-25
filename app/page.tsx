import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, Users } from "lucide-react";
import PostTable from '@/components/posts/PostTable'

export default function Home() {
  return (
  <>
    <div className="flex flex-col md:flex-row justify-between  gap-5 mb-5">
      <DashboardCard 
      title="posts"
      count={100}
      icon={<Newspaper className="text-slate-blue" size={72}/>}
      />
    

      <DashboardCard 
      title="categories"
      count={12}
      icon={<Folder className="text-slate-blue" size={72}/>}
      />
    

      <DashboardCard 
      title="users"
      count={200}
      icon={<Users className="text-slate-blue" size={72}/>}
      />

      <DashboardCard 
      title="comments"
      count={418}
      icon={<MessageCircle className="text-slate-blue" size={72}/>}
      />
    </div>

    <PostTable title='the future of AI' limit={6}/>
  </> 
  );
}
