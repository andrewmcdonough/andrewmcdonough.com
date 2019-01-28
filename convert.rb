#!/usr/bin/env ruby

require 'rspec'

class DokuConvertor
  attr_reader :input
  private     :input

  def initialize(input:)
    @input = input
  end

  def call
    input.split("\n").map do |line|
      replace_headings(
        process_links(
          line
        )
      )
    end.join("\n")
  end

  def replace_headings(line)
    case line
    when /====== (.*) =====/ then "# #{$1}"
    when /===== (.*) =====/ then "## #{$1}"
    when /==== (.*) ====/ then "### #{$1}"
    when /=== (.*) ===/ then "#### #{$1}"
    when /== (.*) ==/ then "##### #{$1}"
    when /= (.*) =/ then "###### #{$1}"
    else line
    end
  end

  def process_links(line)
    line.gsub(/\[\[(.*)\]\]/) do |match|
      "[#{$1}](/wiki/#{$1.downcase.gsub(' ','_')})"
    end
  end
end

RSpec.describe DokuConvertor do
  subject { described_class.new(input: input).call }
  let(:input) { nil }

  describe "Processing headers" do
    describe "h1" do
      let(:input) { "====== Ruby ======" }
      it { is_expected.to eql "# Ruby" }
    end

    describe "h2" do
      let(:input) { "===== Ruby =====" }
      it { is_expected.to eql "## Ruby" }
    end

    describe "h3" do
      let(:input) { "==== Ruby ====" }
      it { is_expected.to eql "### Ruby" }
    end

    describe "h4" do
      let(:input) { "=== Ruby ===" }
      it { is_expected.to eql "#### Ruby" }
    end

    describe "h5" do
      let(:input) { "== Ruby ==" }
      it { is_expected.to eql "##### Ruby" }
    end

    describe "h6" do
      let(:input) { "= Ruby =" }
      it { is_expected.to eql "###### Ruby" }
    end
  end

  describe "Processing links" do
    context "that are internal" do
      let(:input) { "  * [[Useful Java Classes]]" }
      it { is_expected.to eql "  * [Useful Java Classes](/wiki/useful_java_classes)" }
    end

    context "that are external" do
      let(:input) { "  * [[Useful Java Classes]]" }
      it { is_expected.to eql "  * [Useful Java Classes](/wiki/useful_java_classes)" }
    end
  end

  describe "Processing multiple lines" do
    let(:input) { <<~WIKI
      ====== Ruby ======
      ===== Rails =====
      Ruby on Rails is a web framework
      WIKI
    }

    it { is_expected.to eql <<~MARKDOWN
      # Ruby
      ## Rails
      Ruby on Rails is a web framework
      MARKDOWN
      .strip
    }
  end
end

Dir.glob("import/wiki/*.md").each do |file|
  content = File.open(file).read
  new_content = DokuConvertor.new(input: content).call
  new_path = file.gsub(/^import/, "content/blog")
  f = File.open(new_path, "w")
  f.write(new_content)
  f.close
  puts new_path
end
