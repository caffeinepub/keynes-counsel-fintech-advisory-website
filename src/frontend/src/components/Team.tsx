import { useTeamMembers } from '@/hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';

export function Team() {
  const { data: teamMembers, isLoading } = useTeamMembers();

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground">
            A team of financial professionals dedicated to providing honest, conflict-free advice.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="w-full aspect-square rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        ) : teamMembers && teamMembers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-semibold text-xl">{member.name}</h3>
                  <p className="text-sm text-accent font-medium">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted shrink-0">
                  <img
                    src="/assets/generated/team-photo.dim_800x600.jpg"
                    alt="Keynes & Counsel Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-xl">Our Mission</h3>
                  <p className="text-muted-foreground">
                    At Keynes & Counsel, we believe financial advice should be accessible, transparent, and free from conflicts of interest. Our team of certified financial advisors is committed to helping you make informed decisions about your money—without the pressure to buy products or commit to expensive subscriptions.
                  </p>
                  <p className="text-muted-foreground">
                    We combine cutting-edge AI technology with human expertise to provide guidance that's both scalable and personalized. Whether you're just starting your investment journey or looking to optimize your portfolio, we're here to help you achieve your financial goals with clarity and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
