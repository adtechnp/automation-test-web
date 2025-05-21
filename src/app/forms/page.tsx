'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export default function FormsPage() {
  const [sliderValue, setSliderValue] = React.useState([50]);
  const [selectedDate, setSelectedDate] = React.useState('');
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Form submitted! Check console for data.');
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data:', data);
  };

  return (
    <div className="space-y-12">
      <SectionTitle as="h1" data-testid="forms-page-title">Test Forms</SectionTitle>
      <p className="text-muted-foreground -mt-4 mb-8" data-testid="forms-page-description">
        Practice automating interactions with various form elements.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8" data-testid="main-form">
        <Card data-testid="form-card-text-inputs">
          <CardHeader>
            <CardTitle data-testid="form-card-text-inputs-title">Text-Based Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="text-input" data-testid="label-text-input">Text Input</Label>
                <Input type="text" id="text-input" name="textInput" placeholder="Enter some text" data-testid="input-text" />
              </div>
              <div>
                <Label htmlFor="email-input" data-testid="label-email-input">Email Input</Label>
                <Input type="email" id="email-input" name="emailInput" placeholder="name@example.com" data-testid="input-email" />
              </div>
              <div>
                <Label htmlFor="password-input" data-testid="label-password-input">Password Input</Label>
                <Input type="password" id="password-input" name="passwordInput" placeholder="Enter your password" data-testid="input-password" />
              </div>
              <div>
                <Label htmlFor="number-input" data-testid="label-number-input">Number Input</Label>
                <Input type="number" id="number-input" name="numberInput" placeholder="Enter a number" data-testid="input-number" />
              </div>
              <div>
                <Label htmlFor="tel-input" data-testid="label-tel-input">Telephone Input</Label>
                <Input type="tel" id="tel-input" name="telInput" placeholder="123-456-7890" data-testid="input-tel" />
              </div>
              <div>
                <Label htmlFor="url-input" data-testid="label-url-input">URL Input</Label>
                <Input type="url" id="url-input" name="urlInput" placeholder="https://example.com" data-testid="input-url" />
              </div>
            </div>
            <div>
              <Label htmlFor="textarea-input" data-testid="label-textarea-input">Textarea</Label>
              <Textarea id="textarea-input" name="textareaInput" placeholder="Enter a longer message" data-testid="input-textarea" />
            </div>
          </CardContent>
        </Card>

        <Card data-testid="form-card-choice-inputs">
          <CardHeader>
            <CardTitle data-testid="form-card-choice-inputs-title">Choice Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label data-testid="label-checkbox-group">Checkboxes</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-option1" name="checkboxOption1" data-testid="input-checkbox-1" />
                <Label htmlFor="checkbox-option1" data-testid="label-checkbox-1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-option2" name="checkboxOption2" data-testid="input-checkbox-2" />
                <Label htmlFor="checkbox-option2" data-testid="label-checkbox-2">Option 2</Label>
              </div>
            </div>

            <div className="space-y-2">
              <Label data-testid="label-radio-group">Radio Buttons</Label>
              <RadioGroup defaultValue="radio-apple" name="radioGroup" data-testid="input-radiogroup">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="radio-apple" id="radio-apple" data-testid="input-radio-apple" />
                  <Label htmlFor="radio-apple" data-testid="label-radio-apple">Apple</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="radio-banana" id="radio-banana" data-testid="input-radio-banana" />
                  <Label htmlFor="radio-banana" data-testid="label-radio-banana">Banana</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="radio-orange" id="radio-orange" data-testid="input-radio-orange" />
                  <Label htmlFor="radio-orange" data-testid="label-radio-orange">Orange</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="select-input" data-testid="label-select-input">Select Dropdown</Label>
              <Select name="selectInput" data-testid="input-select-trigger">
                <SelectTrigger id="select-input" data-testid="input-select">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent data-testid="input-select-content">
                  <SelectItem value="optionA" data-testid="input-select-option-a">Option A</SelectItem>
                  <SelectItem value="optionB" data-testid="input-select-option-b">Option B</SelectItem>
                  <SelectItem value="optionC" data-testid="input-select-option-c">Option C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="form-card-other-inputs">
          <CardHeader>
            <CardTitle data-testid="form-card-other-inputs-title">Other Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="date-input" data-testid="label-date-input">Date Input</Label>
              <Input 
                type="date" 
                id="date-input" 
                name="dateInput" 
                data-testid="input-date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="file-input" data-testid="label-file-input">File Input</Label>
              <Input type="file" id="file-input" name="fileInput" data-testid="input-file" />
            </div>
            <div>
              <Label htmlFor="range-input" data-testid="label-range-input">
                Range Slider (Value: <span data-testid="range-value-display">{sliderValue[0]}</span>)
              </Label>
              <Slider
                id="range-input"
                name="rangeInput"
                defaultValue={[50]}
                max={100}
                step={1}
                onValueChange={setSliderValue}
                data-testid="input-range"
              />
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end space-x-4 pt-4 border-t">
          <Button type="reset" variant="outline" data-testid="button-reset">Reset Form</Button>
          <Button type="submit" data-testid="button-submit">Submit Form</Button>
        </div>
      </form>
    </div>
  );
}
