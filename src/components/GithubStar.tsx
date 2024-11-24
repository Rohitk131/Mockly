import GitHubStarStat from '@/components/ui/githubstar'; 

export default function Page() {
    return (
      <div className="flex items-center justify-center p-4">
        <GitHubStarStat 
          starCount={11}
          onClick={() => console.log("Starred!")}
        />
      </div>
    )
  }
  
  