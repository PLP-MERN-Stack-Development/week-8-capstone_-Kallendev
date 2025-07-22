import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  CheckCircle,
  Hammer,
  Wrench,
  Zap,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Search,
      title: "Find Local Fundis",
      description: "Connect with verified handymen in your area"
    },
    {
      icon: CheckCircle,
      title: "Verified Professionals",
      description: "All fundis are background-checked and rated"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Safe and secure payment processing"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Get responses within minutes"
    }
  ];

  const recentJobs = [
    {
      id: 1,
      title: "Plumbing Repair",
      location: "Nairobi, Kenya",
      budget: "KSH 5,000",
      category: "Plumbing",
      postedTime: "2 hours ago",
      applicants: 12
    },
    {
      id: 2,
      title: "Electrical Installation",
      location: "Mombasa, Kenya",
      budget: "KSH 15,000",
      category: "Electrical",
      postedTime: "5 hours ago",
      applicants: 8
    },
    {
      id: 3,
      title: "Carpentry Work",
      location: "Kisumu, Kenya",
      budget: "KSH 8,000",
      category: "Carpentry",
      postedTime: "1 day ago",
      applicants: 15
    }
  ];

  const topFundis = [
    {
      id: 1,
      name: "John Mwangi",
      specialty: "Plumbing Expert",
      rating: 4.9,
      jobs: 156,
      location: "Nairobi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mary Akinyi",
      specialty: "Electrical Engineer",
      rating: 4.8,
      jobs: 98,
      location: "Mombasa",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Peter Kiprop",
      specialty: "Carpenter",
      rating: 4.7,
      jobs: 134,
      location: "Nakuru",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              Connect with Local Fundis
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find skilled handymen for all your repair and maintenance needs. 
              Post jobs, get quotes, and hire the best fundis in your area.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/post-job">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Post a Job
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/fundis">
              <Button variant="accent" size="xl" className="w-full sm:w-auto">
                Find Fundis
                <Search className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Quick Search */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button variant="default" className="px-8">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose FundiFix?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make it easy to connect with trusted professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-orange transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Jobs Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Recent Jobs</h2>
              <p className="text-muted-foreground">Latest opportunities for fundis</p>
            </div>
            <Link to="/jobs">
              <Button variant="outline">
                View All Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentJobs.map((job) => (
              <Card key={job.id} className="bg-card border-border hover:shadow-cyan transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <Badge variant="secondary">{job.category}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.postedTime}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-primary">
                      {job.budget}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {job.applicants} applicants
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Fundis Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Rated Fundis</h2>
              <p className="text-muted-foreground">Highly rated professionals in your area</p>
            </div>
            <Link to="/fundis">
              <Button variant="outline">
                View All Fundis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topFundis.map((fundi) => (
              <Card key={fundi.id} className="bg-card border-border hover:shadow-orange transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader className="text-center">
                  <img
                    src={fundi.image}
                    alt={fundi.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{fundi.name}</CardTitle>
                  <CardDescription>{fundi.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center items-center mb-2">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    <span className="font-semibold">{fundi.rating}</span>
                    <span className="text-muted-foreground ml-2">
                      ({fundi.jobs} jobs)
                    </span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {fundi.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;