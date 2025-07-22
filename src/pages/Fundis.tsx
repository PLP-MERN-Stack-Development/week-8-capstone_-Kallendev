import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle,
  Filter,
  Verified,
  Clock,
  DollarSign
} from 'lucide-react';

const Fundis = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const categories = [
    'All Categories',
    'Plumbing',
    'Electrical',
    'Carpentry',
    'Painting',
    'Cleaning',
    'Landscaping',
    'Roofing',
    'HVAC'
  ];

  const locations = [
    'All Locations',
    'Nairobi',
    'Mombasa',
    'Kisumu',
    'Nakuru',
    'Eldoret',
    'Thika',
    'Malindi'
  ];

  const fundis = [
    {
      id: 1,
      name: "John Mwangi",
      specialty: "Master Plumber",
      rating: 4.9,
      reviewCount: 156,
      location: "Nairobi",
      hourlyRate: 800,
      availability: "Available Now",
      verified: true,
      completedJobs: 234,
      responseTime: "Within 1 hour",
      skills: ["Plumbing", "Pipe Installation", "Drain Cleaning"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Experienced plumber with 10+ years in residential and commercial plumbing."
    },
    {
      id: 2,
      name: "Mary Akinyi",
      specialty: "Licensed Electrician",
      rating: 4.8,
      reviewCount: 98,
      location: "Mombasa",
      hourlyRate: 1200,
      availability: "Available Today",
      verified: true,
      completedJobs: 167,
      responseTime: "Within 30 minutes",
      skills: ["Electrical Installation", "Wiring", "Solar Systems"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description: "Certified electrician specializing in residential and solar installations."
    },
    {
      id: 3,
      name: "Peter Kiprop",
      specialty: "Professional Carpenter",
      rating: 4.7,
      reviewCount: 134,
      location: "Nakuru",
      hourlyRate: 600,
      availability: "Available Tomorrow",
      verified: true,
      completedJobs: 189,
      responseTime: "Within 2 hours",
      skills: ["Furniture Making", "Roofing", "Door Installation"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Skilled carpenter with expertise in custom furniture and home improvements."
    },
    {
      id: 4,
      name: "Grace Wanjiku",
      specialty: "Interior Painter",
      rating: 4.9,
      reviewCount: 203,
      location: "Nairobi",
      hourlyRate: 500,
      availability: "Available Now",
      verified: true,
      completedJobs: 145,
      responseTime: "Within 1 hour",
      skills: ["Interior Painting", "Exterior Painting", "Decorative Finishes"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "Professional painter with an eye for detail and color coordination."
    },
    {
      id: 5,
      name: "David Otieno",
      specialty: "HVAC Technician",
      rating: 4.6,
      reviewCount: 87,
      location: "Kisumu",
      hourlyRate: 1000,
      availability: "Available This Week",
      verified: true,
      completedJobs: 112,
      responseTime: "Within 4 hours",
      skills: ["AC Installation", "Heating Systems", "Ventilation"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      description: "HVAC specialist with experience in all types of climate control systems."
    },
    {
      id: 6,
      name: "Sarah Mutua",
      specialty: "Cleaning Specialist",
      rating: 4.8,
      reviewCount: 267,
      location: "Nairobi",
      hourlyRate: 400,
      availability: "Available Now",
      verified: true,
      completedJobs: 456,
      responseTime: "Within 30 minutes",
      skills: ["Deep Cleaning", "Office Cleaning", "Move-in/out Cleaning"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      description: "Professional cleaning service with attention to detail and eco-friendly products."
    }
  ];

  const filteredFundis = fundis.filter(fundi => {
    const matchesSearch = fundi.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         fundi.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         fundi.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || selectedCategory === 'All Categories' ||
                           fundi.skills.some(skill => skill.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' ||
                           fundi.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Skilled Fundis</h1>
          <p className="text-xl text-muted-foreground">
            Browse verified professionals in your area
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 bg-card border-border">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, specialty, or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-input border-border"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-muted-foreground">
            {filteredFundis.length} fundis found
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Fundis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFundis.map((fundi) => (
            <Card key={fundi.id} className="bg-card border-border hover:shadow-orange transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={fundi.image}
                      alt={fundi.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{fundi.name}</CardTitle>
                        {fundi.verified && (
                          <Verified className="h-4 w-4 text-accent" />
                        )}
                      </div>
                      <CardDescription>{fundi.specialty}</CardDescription>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="font-semibold">{fundi.rating}</span>
                      <span className="text-muted-foreground text-sm ml-1">
                        ({fundi.reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {fundi.location}
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-1" />
                    KSH {fundi.hourlyRate}/hour
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    Response time: {fundi.responseTime}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {fundi.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {fundi.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-accent font-medium">
                    {fundi.availability}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {fundi.completedJobs} jobs completed
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button variant="default" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFundis.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No fundis found matching your criteria.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('');
                setSelectedLocation('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fundis;