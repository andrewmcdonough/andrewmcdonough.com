# PDF::Writer

PDF Writer is a library for creating PDFs.

## Installation

  gem install pdf-writer

## Configuration
In config/environment.rb
  require 'pdf/writer'
  require 'pdf/simpletable' # If you want to be able to draw tables
  Mime::Type.register 'application/pdf', :pdf

## Usage
###### PDF::Writer.new(:paper
  pdf.text "This is some text", :font_size => 8, :justification => :center
  pdf.render

## Tables