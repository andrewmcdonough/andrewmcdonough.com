====== Ant ======

  * [[Ant vs Maven]]

  <project name="<name of the project>">
    <property name="source.root" value="src"/>
  </project>




===== Targets =====
  <target name="<name>" description="<description">
    .. do stuff ..
  </target>

==== Dependencies ====
Targets can depend on other targets e.g.
  <target name="A"/>
  <target name="B" depends="A"/>
  <target name="C" depends="B"/>
  <target name="D" depends="C,B,A"/>

===== Properties =====
<property name="//name//" value="//value//"/>

===== Tasks =====
A task is something that is executed.  It has the format:
  <name att1='val1' att2='val2' ....>
    .. some properties ..
  </name>


===== Replace =====
    <replace dir="${source.root}">
      <include name="**/*.hbm.xml"/>
      <replacetoken><![CDATA[<generator class="assigned" />]]></replacetoken>
      <replacevalue><![CDATA[ <generator class="sequence">
         			    <param name="sequence">BASE.</param>
			      </generator></replacevalue>
			      ]]></replacevalue>
    </replace>
    

http://lbdpc15.epfl.ch/JAVA/Jakarta/Ant/docs/