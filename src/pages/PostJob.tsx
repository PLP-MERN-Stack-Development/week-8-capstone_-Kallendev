import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Calendar, 
  DollarSign, 
  Upload,
  X,
  Plus
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PostJob = () => {
  const { toast } = useToast();
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    budget: '',
    urgency: '',
    requirements: [] as string[],
  });
  const [newRequirement, setNewRequirement] = useState('');

  const categories = [
    'Plumbing',
    'Electrical',
    'Carpentry',
    'Painting',
    'Cleaning',
    'Landscaping',
    'Roofing',
    'HVAC',
    'General Maintenance',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Within a week' },
    { value: 'medium', label: 'Within 3 days' },
    { value: 'high', label: 'Within 24 hours' },
    { value: 'urgent', label: 'Immediately' }
  ];

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setJobData(prev => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()]
      }));
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    setJobData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!jobData.title || !jobData.description || !jobData.category || !jobData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Job data:', jobData);
    
    toast({
      title: "Job Posted Successfully!",
      description: "Your job has been posted and fundis will start applying soon.",
    });

    // Reset form
    setJobData({
      title: '',
      description: '',
      category: '',
      location: '',
      budget: '',
      urgency: '',
      requirements: [],
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Post a Job</h1>
          <p className="text-xl text-muted-foreground">
            Describe your project and connect with skilled fundis in your area
          </p>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
            <CardDescription>
              Provide detailed information about your project to attract the right fundis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Job Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Fix leaking kitchen sink"
                  value={jobData.title}
                  onChange={(e) => setJobData(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-input border-border"
                />
              </div>

              {/* Category and Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select 
                    value={jobData.category} 
                    onValueChange={(value) => setJobData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="e.g., Nairobi, Kenya"
                      value={jobData.location}
                      onChange={(e) => setJobData(prev => ({ ...prev, location: e.target.value }))}
                      className="pl-10 bg-input border-border"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Job Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the work that needs to be done, including any specific requirements or preferences..."
                  value={jobData.description}
                  onChange={(e) => setJobData(prev => ({ ...prev, description: e.target.value }))}
                  className="min-h-32 bg-input border-border"
                />
              </div>

              {/* Budget and Urgency */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (KSH)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="budget"
                      placeholder="e.g., 5000"
                      value={jobData.budget}
                      onChange={(e) => setJobData(prev => ({ ...prev, budget: e.target.value }))}
                      className="pl-10 bg-input border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency</Label>
                  <Select 
                    value={jobData.urgency} 
                    onValueChange={(value) => setJobData(prev => ({ ...prev, urgency: value }))}
                  >
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <Label>Job Requirements</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a requirement..."
                    value={newRequirement}
                    onChange={(e) => setNewRequirement(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
                    className="bg-input border-border"
                  />
                  <Button type="button" onClick={addRequirement} size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                {jobData.requirements.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {jobData.requirements.map((req, index) => (
                      <Badge key={index} variant="secondary" className="pr-1">
                        {req}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="ml-1 h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => removeRequirement(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label>Attach Images/Documents (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Drag and drop files here or click to browse
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" variant="hero" size="lg" className="flex-1">
                  Post Job
                </Button>
                <Button type="button" variant="outline" size="lg">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="mt-8 bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Tips for a Great Job Post</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Be specific about what you need done</li>
              <li>• Include relevant photos if possible</li>
              <li>• Set a realistic budget range</li>
              <li>• Mention any tools or materials you'll provide</li>
              <li>• Specify your preferred timeline</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostJob;